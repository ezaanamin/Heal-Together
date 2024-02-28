import neo4j from 'neo4j-driver';
import { DateDifference } from './helpers.js';
import { createClient } from 'redis';
export const GetUsersMindFulDetails = async (req, res) => {

  try {
    const { username } = req.body;
    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USERNAME;
    const password = process.env.NEO4J_PASSWORD;

    const client = createClient();
    await client.connect();

    const usernameSupportMindfulMoment = `${username}Support_MindfulMoment`;
    const userSupportMindfulMomentsCheck = await client.exists(usernameSupportMindfulMoment);

    if (userSupportMindfulMomentsCheck === 1) {
      const value = await client.get(usernameSupportMindfulMoment);
      const userData = JSON.parse(value);
      res.json(userData);
    } else {
      const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
      const session = driver.session();

      try {
   
        const supportGroupQuery = `
          MATCH (p:Users {username: $username})-[:support_group]->(friend)
          RETURN friend.username AS Username
          LIMIT 25;
        `;
        const result = await session.run(supportGroupQuery, { username });

        const supportGroup = result.records.map(record => record.get('Username'));

        
        const momentsQuery = `
          UNWIND $supportGroup AS username
          MATCH (author:Users {username: username})-[:Author]->(post:\`Mindful Moments\`)
          OPTIONAL MATCH (post)<-[:Respond_To]-(comments:Comments)
          WITH post, COUNT(comments) AS NumberOfComments, author.username AS username, author.user_profile_pic AS profile_pic
          OPTIONAL MATCH (post)<-[:likes]-(liker:Users)
          RETURN post.Mindful_Moments AS MindfulMoments, NumberOfComments, username, profile_pic, COLLECT(liker.username) AS liked, post.Date as Date
        `;
        const mindfulMomentsResult = await session.run(momentsQuery, { supportGroup });

        const mindfulMoments = mindfulMomentsResult.records.map(record => ({
          username: record.get("username"),
          MindfulMoments: record.get("MindfulMoments"),
          profile_pic: record.get("profile_pic"),
          NumberOfComments: record.get("NumberOfComments").low, 
          support: record.get("liked"),
          Date: DateDifference(record.get("Date")) 
        }));

        const UserData = JSON.stringify(mindfulMoments);

        await client.set(usernameSupportMindfulMoment, UserData);
        const expirationInSeconds=172800
        client.expire(usernameSupportMindfulMoment, expirationInSeconds);

        res.json(mindfulMoments);
      } catch (error) {
        console.error("Error running Neo4j query:", error);
        res.status(500).json({ error: 'Failed to fetch mindful moments' });
      } finally {
        await session.close();
      }
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: 'Internal server error' });
  } 
};
