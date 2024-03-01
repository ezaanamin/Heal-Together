import neo4j from 'neo4j-driver';
import { DateDifference} from './helpers.js';
import { createClient } from 'redis';
export const GetUsersMindFulDetails = async (req, res) => {

  try {
    const { username } = req.body;
    const username1=username;
  

    const client = createClient();
    await client.connect();

    const usernameSupportMindfulMoment = `${username}Support_MindfulMoment`;
    const userSupportMindfulMomentsCheck = await client.exists(usernameSupportMindfulMoment);
    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USERNAME;
    const password = process.env.NEO4J_PASSWORD
    // if (userSupportMindfulMomentsCheck === 1) {
    //   const value = await client.get(usernameSupportMindfulMoment);
    //   const userData = JSON.parse(value);
    //   res.json(userData);
    // } else {
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
        OPTIONAL MATCH (post)<-[:likes]-(support:Users {username: $username1})
        RETURN post.Mindful_Moments AS MindfulMoments, NumberOfComments, username, profile_pic, COLLECT(liker.username) AS liked, post.Date AS Date,
               COUNT(support) > 0 AS Support
      `;
      const mindfulMomentsResult = await session.run(momentsQuery, { supportGroup, username1 });
        const mindfulMoments = mindfulMomentsResult.records.map(record => ({
          username: record.get("username"),
          MindfulMoments: record.get("MindfulMoments"),
          profile_pic: record.get("profile_pic"),
          NumberOfComments: record.get("NumberOfComments").low, 
          support: record.get("liked"),
          Date: DateDifference(record.get("Date")),
          Support:record.get("Support")
        }));


        // console.log(mindfulMoments);
        // const UserData = JSON.stringify(mindfulMoments);

        // await client.set(usernameSupportMindfulMoment, UserData);
        // const expirationInSeconds=172800
        // client.expire(usernameSupportMindfulMoment, expirationInSeconds);

        res.json(mindfulMoments);
      } catch (error) {
        console.error("Error running Neo4j query:", error);
        res.status(500).json({ error: 'Failed to fetch mindful moments' });
      } finally {
        await session.close();
      }
    }
  catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: 'Internal server error' });
  } 
};
export const SupportMindFulMoments = async (req, res) => {
  const { username } = req.body;
  const { MindfulMoments } = req.body;
  const uri = process.env.NEO4J_URI;
  const user = process.env.NEO4J_USERNAME;
  const password = process.env.NEO4J_PASSWORD;
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  const session = driver.session();
  const momentsQuery = `
    MATCH p=(n:Users{username:$username})-[:likes]->(m:\`Mindful Moments\`{Mindful_Moments:$MindfulMoments})
    RETURN COUNT(p) > 0 AS support
  `;
  let support = false;

  try {
    const result = await session.run(momentsQuery, { username, MindfulMoments });
    result.records.forEach(record => {
      support = record.get('support');
      console.log(record.get('support'));
    });

    let Support_Query;
    if (support==false) {
      Support_Query = `
        MATCH (m:\`Mindful Moments\`{Mindful_Moments:$MindfulMoments}), (n:Users{username:$username})
        MERGE (n)-[r:likes]->(m) ON CREATE SET r.created = TRUE ON MATCH SET r.created = FALSE
        RETURN r.created AS Support
      `;
    } if(support==true) {
      Support_Query = `
      MATCH (n:Users {username: $username})-[r:likes]->(m:\`Mindful Moments\`{Mindful_Moments:$MindfulMoments})
DELETE  r;
  
      
      `;
      // console.log(Support_Query)
      console.log("I am running from deatch ")
    }

    const supportResult = await session.run(Support_Query, { username, MindfulMoments });
    // if(supportResult)
    // {
    //   console.log(supportResult,'testing mate')
    // }
    
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  } finally {
    session.close(); 
  }
};
