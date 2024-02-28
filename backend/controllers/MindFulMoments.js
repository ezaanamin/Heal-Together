import neo4j from 'neo4j-driver';
import { DateDifference } from './helpers.js';
export const GetUsersMindFulDetails = async (req, res) => {
  try {
    const username = req.body.username;
    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USERNAME;
    const password = process.env.NEO4J_PASSWORD;


    // console.log(username);
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();
    const cypherQuery = `
    MATCH (p:Users {username: '${username}'})-[:support_group]->(friend)
    RETURN friend.username as Username
    LIMIT 25;
  `;
  const result = await session.run(cypherQuery);
  const support_group_length = result.records.length
  var support_group =[];
  for (let i = 0; i < support_group_length; i++) {
    {
   
   support_group.push(result.records[i]._fields[0])
      
    }
  }
//   for (let i = 0; i < support_group.length; i++) {

//     const query =  `
//     MATCH (author:Users {username: '${support_group[i]}'})-[:Author]->(post:\`Mindful Moments\`)
//     OPTIONAL MATCH (post)<-[:Respond_To]-(comments:Comments)
//     WITH post, COUNT(comments) AS NumberOfComments, author.username AS username, author.user_profile_pic AS profile_pic
//     OPTIONAL MATCH (post)<-[:likes]-(liker:Users)
//     RETURN post.MindfulMoments AS MindfulMoments, NumberOfComments, username, profile_pic, COLLECT(liker.username) AS liked
//   `;

//     const result = await session.run(query, { username: support_group[i] });
//     console.log(`Results for user ${support_group[i]}:`);

//     result.records.forEach(record => {
    
//       console.log(record.get("username"))
     
//   });
// }

const query = `
UNWIND $supportGroup AS username
  MATCH (author:Users {username: username})-[:Author]->(post:\`Mindful Moments\`)
  OPTIONAL MATCH (post)<-[:Respond_To]-(comments:Comments)
  WITH post, COUNT(comments) AS NumberOfComments, author.username AS username, author.user_profile_pic AS profile_pic
  OPTIONAL MATCH (post)<-[:likes]-(liker:Users)
  RETURN post.Mindful_Moments AS MindfulMoments, NumberOfComments, username, profile_pic, COLLECT(liker.username) AS liked,post.Date as Date
`;
const result1 = await session.run(query, { supportGroup: support_group });
let MindufulMoments = []; 
result1.records.forEach(record => {
  MindufulMoments.push({
    username: record.get("username"),
    MindfulMoments: record.get("MindfulMoments"),
    profile_pic: record.get("profile_pic"),
    NumberOfComments: record.get("NumberOfComments").low,
    support: record.get("liked"),
    Date: DateDifference(record.get("Date"))
  });
});


res.json(MindufulMoments)

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  } 
};


