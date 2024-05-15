import neo4j from 'neo4j-driver';
import { DateDifference} from './helpers.js';
import { createClient } from 'redis';
import { Users } from '../model/users.js';
import jwt from "jsonwebtoken"

export const GetUsersMindFulDetails = async (req, res) => {

  try {
    const authorizationHeader = req.headers['authorization'];
    if (!authorizationHeader) {
    
      return res.status(401).send('Not authorized');
    }

    const token = authorizationHeader.split(' ')[1].replace(/"/g, '');

    const secretKey = process.env.TOKEN_KEY;

    jwt.verify(token, secretKey, async (err, decoded) => {

      if (err) {
        console.error('Token verification failed:', err);
      } else {
        Users.findById(decoded.user_id).then(async (doc)=>{

          if(doc)
          {
            const username=doc.username;
            const username1=doc.username;

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
                MATCH (author:Users {username: username})-[:Author]->(post:Mindful_Moments)
                OPTIONAL MATCH (post)<-[:Respond_To]-(comments:Comments)
                WITH post, COUNT(comments) AS NumberOfComments, author.username AS username, author.user_profile_pic AS profile_pic
                OPTIONAL MATCH (post)<-[:likes]-(liker:Users)
                WITH post, NumberOfComments, username, profile_pic, COLLECT(liker.username) AS liked
                OPTIONAL MATCH (post)<-[:likes]-(support:Users {username: $username1})
                RETURN post.Mindful_Moments AS MindfulMoments, NumberOfComments, username, profile_pic, liked, post.Date AS Date,
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
        
        
                // //console.log(mindfulMoments);
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

        })
        


       


      }

    })
  

  
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
  MATCH (n:Users {username: $username})-[:likes]->(m:Mindful_Moments {Mindful_Moments: $MindfulMoments})
  RETURN COUNT(m) > 0 AS support
`;

  let support = false;

  try {
    const result = await session.run(momentsQuery, { username, MindfulMoments });
    result.records.forEach(record => {
      support = record.get('support');
      //console.log(record.get('support'));
    });

    let Support_Query;
    if (support==false) {
      Support_Query = `
      MATCH (m:Mindful_Moments {Mindful_Moments: $MindfulMoments}), (n:Users {username: $username})
      MERGE (n)-[r:likes]->(m) 
      ON CREATE SET r.created = TRUE 
      ON MATCH SET r.created = FALSE
      RETURN r.created AS Support
  `;
    } if(support==true) {
      Support_Query = `
      MATCH (n:Users {username: $username})-[r:likes]->(m:Mindful_Moments {Mindful_Moments: $MindfulMoments})
      DELETE r
  `;
      // //console.log(Support_Query)
      //console.log("I am running from deatch ")
    }

    const supportResult = await session.run(Support_Query, { username, MindfulMoments });
    // if(supportResult)
    // {
    //   //console.log(supportResult,'testing mate')
    // }
    
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  } finally {
    session.close(); 
  }
};

export const GetCommentsMindFulMoments = async (req, res) => {
  const { MindfulMoments } = req.body;
  const client = createClient();
  await client.connect();

  // //console.log(skip,limit);
  try {
    let Comments = [];
    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USERNAME;
    const password = process.env.NEO4J_PASSWORD;
    let comment_id=req.body.comment_id;
    let total_length=req.body.total_length;

    console.log(total_length ,'total length');

    if(comment_id==-1)
    {
      console.log("no more comments");
      return;
    }
    console.log(comment_id,'comment id')
      let Comment_ID=-1;

    let limit=5;

    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();
    // const momentsQuery = `
    //   MATCH p=(l:Comments)-[:Respond_To]->(n:Mindful_Moments`{Mindful_Moments: $MindfulMoments}) RETURN l.User_Comment_id as user_id, l.Comments as Comments
    // `;
    const momentsQuery = `
      MATCH (l:Comments)-[:Respond_To]->(n2:Mindful_Moments {Mindful_Moments:$MindfulMoments})
      WHERE l.Comment_ID > $comment_id
      MATCH (n:Users)
      WHERE n._id = REPLACE(l.User_Comment_id, ' ', '')
      WITH l.Comments AS comments, n.username AS username, n.user_profile_pic AS profile_pic, l.Comment_ID AS comment_id
      RETURN comments, username, profile_pic, LAST(COLLECT(comment_id)) AS Comment_ID
    `;

    const countQuery = `
      MATCH (l:Comments)-[:Respond_To]->(n2:Mindful_Moments {Mindful_Moments: $MindfulMoments})
      WHERE l.Comment_ID > $comment_id
      RETURN count(l) AS commentCount
    `;

    const countResult = await session.run(countQuery, { MindfulMoments, comment_id });

    const commentCount = countResult.records[0].get('commentCount').toNumber();
    // console.log(commentCount,'count ');
let result;
    if (commentCount <= 5) {
       result=await session.run(momentsQuery ,{ MindfulMoments, comment_id });

    }
    else
    {
    result=await session.run(momentsQuery + ` LIMIT ${limit}`, { MindfulMoments, comment_id });


    }


    result.records.forEach(record => {
      const comment = record.get('comments').trim();
      const username = record.get('username');
      const profile_pic = record.get('profile_pic');
      const commentID = record.get('Comment_ID').toNumber();
      if(commentID>Comment_ID)
      {
        Comment_ID=commentID;
      }
      Comments.push({ comment, username, profile_pic });
    });
// Comments.push({Comment_ID:Comment_ID})
session.close();
driver.close();
     
    //console.log(Comments);

  

// console.log(Comment_ID,'comment id 2 ')
   
    res.json({ success: true, data: Comments,Comment_ID:Comment_ID });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};




      // for (const record of result.records) {
      //   const user_id = record.get('user_id');
      //   const comment = record.get('Comments');
      //   const userInfo = await GetUserInformation(user_id);

      //   Comments.push({
      //     username: userInfo[0].username,
      //     user_profile_pic: userInfo[0].user_profile_pic,
      //     comment: comment
      //   });
      // }

      // await client.set(MindFulMomentsComments, JSON.stringify(Comments));
      // res.status(200).json({ comments: Comments });
    // }



 //   {
    // const result = await session.run(momentsQuery + ` SKIP ${skip} LIMIT ${skip_number}`, { MindfulMoments });

    //   if (result.records.length < 3 && result.records.length!=0) {
    //             skip_number=result.records.length;
    //             for (const record of result.records) {
    //               const user_id = record.get('user_id');
    //               const comment = record.get('Comments');
    //               const userInfo = await GetUserInformation(user_id);
    //       // //console.log(userInfo)
    //               Comments.push({
    //                 username: userInfo.username,
    //                 user_profile_pic: userInfo.user_profile_pic,
    //                 comment: comment
    //               });
    //             }
    //              io.emit('comments', {Comments});
          
    //             // skip+=10
    //       // io.emit('comments', {length:result.records.length});       
    //            hasNextPage=false;
    //           }
    //           if(result.records.length==0)
    //           {
    //             hasNextPage=false;
    //           }
              
    //           else {
    //            for (const record of result.records) {
    //     const user_id = record.get('user_id');
    //     const comment = record.get('Comments');
    //     const userInfo = await GetUserInformation(user_id);

    //     Comments.push({
    //       username: userInfo.username,
    //       user_profile_pic: userInfo.user_profile_pic,
    //       comment: comment
    //     });
    //   }
    //    io.emit('comments', {Comments});


    //             skip += 3;
    //           }
    //   }
