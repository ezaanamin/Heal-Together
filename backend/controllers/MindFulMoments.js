import neo4j from 'neo4j-driver';
import moment from 'moment';

const DateDifference = (date1) => {
  const formattedDate = moment(date1);
  const currentDate = moment();
  const differenceInMilliseconds = formattedDate.diff(currentDate);
  const daysDifference = Math.abs(Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)));
  const weeksDifference = Math.floor(daysDifference / 7);
  const monthsDifference = Math.floor(weeksDifference / 4.34524); // average days in a month
  let remainingTime;
  if (daysDifference >= 7) {
    if (monthsDifference >= 12) {
      const years = Math.floor(monthsDifference / 12);
      const remainingMonths = monthsDifference % 12;
      remainingTime = `${years} years and ${remainingMonths} months`;
    } else if (monthsDifference >= 1) {
      remainingTime = `${monthsDifference} months`;
    } else {
      remainingTime = `${weeksDifference} weeks`;
    }
  } else {
    remainingTime = `${daysDifference} days`;
  }
  
  return remainingTime;
  
};

export const GetUsersMindFulDetails = async (req, res) => {
  try {
    const username = req.body.username;
    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USERNAME;
    const password = process.env.NEO4J_PASSWORD;

    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();

    const cypherQuery = `
      MATCH p=(:Users {username: $username})-[:Authors]->(post:\`MindFul Moments\`)
      OPTIONAL MATCH likes=(:Users)-[:likes]->(post)
      OPTIONAL MATCH comments=(n:Users)-[:creates]->(m:Comments)-[:Respond_To]->(post)
      RETURN
        post.Mindful_Moments AS MindfulMoments,
        post.Date AS Date,
        COLLECT(DISTINCT nodes(likes)[0].username) AS likes,
        COLLECT(DISTINCT {comment: m.Comments, username: n.username, userProfilePic: n.user_profile_pic}) AS comments`;

    const result = await session.run(cypherQuery, { username: username });

    const responseData = result.records.map(record => ({
      MindfulMoments: record.get('MindfulMoments'),
      Date: DateDifference(record.get('Date')),
      Likes: record.get('likes'),
      Comments: record.get('comments'),
    }));

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  } 
};
