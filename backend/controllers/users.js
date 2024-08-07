import bcrypt from "bcrypt"
import nodemailer from "nodemailer"
import moment from "moment"
import neo4j, { auth } from "neo4j-driver"
import jwt from "jsonwebtoken"
import { Users } from "../model/users.js"
import { createClient } from 'redis';
import { Authentication } from "./authentication.js"
function generateCode() {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function StoryLength(story)
{
  let words=0
  for (let i=0;i<story.length;i++)
  {
    if(story[i]==" ")
    {
      words+=1;
    }

  }
  return words
}

async function comparePassword(password, hashedPassword) {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    console.error('Error comparing passwords:', error);
    return false;
  }
}


export const HashPassword = async (req, res) => {

  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) {
      res.json({ 'Error hashing password:': err });
      return;
    }

    res.json({ 'Hashed Password:': hashedPassword });


  });
}
async function SendCode(email, code, firstName, LastName) {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.PASSWORD,
    },
  });




  const info = await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: "Heal Together Verification Code ",
    text: `Dear ${firstName} ${LastName} your Heal Together Verification Code  is ${code}. This code will expire within 30 mins`,

  });

  //console.log(info)
}

export const NewUser = async (req, res) => {
  try {
    const existingUserWithUsername = await Users.findOne({ username: req.body.values.username });
    if (existingUserWithUsername) {
      return res.status(400).json({ error: 'Username is already in use. Please choose a different username.' });
    }
    const existingUserWithEmail = await Users.findOne({ email: req.body.values.email });
    if (existingUserWithEmail) {
      return res.status(400).json({ error: 'Email is already in use. Please use a different email address.' });
    }
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(req.body.values.password, 10);
    const newUser = {
      firstName: req.body.values.firstName,
      surName: req.body.values.SurName,
      email: req.body.values.email,
      username: req.body.values.username,
      password: hashedPassword,
      verification: false,
      age: req.body.Primary_Profile.age,
      gender: req.body.Primary_Profile.gender_identity,
      userProfile: {
        primary_motivation: req.body.Primary_Profile.primary_motivation,
        professional_treatment: req.body.Primary_Profile.professional_treatment,
        comfortable_discussing_mental_health: req.body.Primary_Profile.comfortable_discussing_mental_health,
        connect_with_others: req.body.Primary_Profile.connect_with_others,
        religious: req.body.Primary_Profile.religious,
        received_a_diagnosis: req.body.Primary_Profile.received_a_diagnosis,
        age: req.body.Primary_Profile.age,
        gender_identity: req.body.Primary_Profile.gender_identity,
        sexual_orientation: req.body.Primary_Profile.sexual_orientation,
        religious_identity: req.body.Primary_Profile.religious_identity
      },
      Mental_Health_Insight: {

        depression: req.body.Mental_health_insight_Question.depression,
        anxiety: req.body.Mental_health_insight_Question.anxiety,
        bipolar: req.body.Mental_health_insight_Question.bipolar,
        ptsd: req.body.Mental_health_insight_Question.ptsd,
        ocd: req.body.Mental_health_insight_Question.ocd,
        schizophrenia: req.body.Mental_health_insight_Question.schizophrenia,
        eatingDisorders: req.body.Mental_health_insight_Question.eatingDisorders,
        other: req.body.Mental_health_insight_Question.other,
      },
      Coping: {

        meditation: req.body.Coping_Question.meditation,
        creativeActivities: req.body.Coping_Question.creativeActivities,
        talking_to_friends_family: req.body.Coping_Question.talking_to_friends_family,
        exercising: req.body.Coping_Question.exercising,
        professional_help: req.body.Coping_Question.professional_help,
      },

      Interests: {

        copingTechniques: req.body.Interest_questions.copingTechniques,
        personalStories: req.body.Interest_questions.personalStories,
        medication: req.body.Interest_questions.medication,
        reducingStigma: req.body.Interest_questions.reducingStigma,
        healthyLifestyle: req.body.Interest_questions.healthyLifestyle,
        spirituality: req.body.Interest_questions.spirituality,
        otherInterests: req.body.Interest_questions.otherInterests,

      },
    };


    const createdUser = await Users.create(newUser);

    const verificationCode = generateCode();
    SendCode(
      req.body.values.email,
      verificationCode,
      req.body.values.firstName,
      req.body.values.SurName
    );

    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USERNAME;
    const password = process.env.NEO4J_PASSWORD;

    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();
    const parameters = {
      firstName: newUser.firstName,
      surName: newUser.surName,
      username: newUser.username,
      email: newUser.email,
      age: newUser.age,
      password: newUser.password,
      verification: newUser.verification,
      primary_motivation: newUser.userProfile.primary_motivation,
      professional_treatment: newUser.userProfile.professional_treatment,
      comfortable_discussing_mental_health: newUser.userProfile.comfortable_discussing_mental_health,
      connect_with_others: newUser.userProfile.connect_with_others,
      religious: newUser.userProfile.religious,
      received_a_diagnosis: newUser.userProfile.received_a_diagnosis,
      gender_identity: newUser.userProfile.gender_identity,
      sexual_orientation: newUser.userProfile.sexual_orientation,
      religious_identity: newUser.userProfile.religious_identity,
      depression: newUser.Mental_Health_Insight.depression,
      anxiety: newUser.Mental_Health_Insight.anxiety,
      bipolar: newUser.Mental_Health_Insight.bipolar,
      ptsd: newUser.Mental_Health_Insight.ptsd,
      ocd: newUser.Mental_Health_Insight.ocd,
      schizophrenia: newUser.Mental_Health_Insight.schizophrenia,
      eatingDisorders: newUser.Mental_Health_Insight.eatingDisorders,
      other: newUser.Mental_Health_Insight.other,
      eating_disorders: newUser.Mental_Health_Insight.eating_disorders,
      copingTechniques: newUser.Coping.copingTechniques,
      personalStories: newUser.Coping.personalStories,
      medication: newUser.Coping.medication,
      reducingStigma: newUser.Coping.reducingStigma,
      healthyLifestyle: newUser.Coping.healthyLifestyle,
      spirituality: newUser.Coping.spirituality,
      otherInterests: newUser.Coping.otherInterests,
      meditation: newUser.Interests.meditation,
      creativeActivities: newUser.Interests.creativeActivities,
      talkToFriends: newUser.Interests.talkToFriends,
      exercise: newUser.Interests.exercise,
      seekingHelp: newUser.Interests.seekingHelp,
      otherCoping: newUser.Interests.otherCoping,
      creative_activities: newUser.Interests.creative_activities,
      talking_to_friends_family: newUser.Interests.talking_to_friends_family,
      exercising: newUser.Interests.exercising,
      professional_help: newUser.Interests.professional_help,
      copingother: newUser.Interests.copingother,
      coping_techniques: newUser.Interests.coping_techniques,
      personal_stories: newUser.Interests.personal_stories,
      reducing_stigma: newUser.Interests.reducing_stigma,
      healthy_lifestyle: newUser.Interests.healthy_lifestyle,
    };

    session
      .run(
        `
        CREATE (n:User {
          firstName: $firstName,
          surName: $surName,
          username: $username,
          email: $email,
          age: $age,
          password: $password,
          verification: $verification,
          primary_motivation: $primary_motivation,
          professional_treatment: $professional_treatment,
          comfortable_discussing_mental_health: $comfortable_discussing_mental_health,
          connect_with_others: $connect_with_others,
          religious: $religious,
          received_a_diagnosis: $received_a_diagnosis,
          gender_identity: $gender_identity,
          sexual_orientation: $sexual_orientation,
          religious_identity: $religious_identity,
          depression: $depression,
          anxiety: $anxiety,
          bipolar: $bipolar,
          ptsd: $ptsd,
          ocd: $ocd,
          schizophrenia: $schizophrenia,
          eatingDisorders: $eatingDisorders,
          other: $other,
          eating_disorders: $eating_disorders,
          copingTechniques: $copingTechniques,
          personalStories: $personalStories,
          medication: $medication,
          reducingStigma: $reducingStigma,
          healthyLifestyle: $healthyLifestyle,
          spirituality: $spirituality,
          otherInterests: $otherInterests,
          meditation: $meditation,
          creativeActivities: $creativeActivities,
          talkToFriends: $talkToFriends,
          exercise: $exercise,
          seekingHelp: $seekingHelp,
          otherCoping: $otherCoping,
          creative_activities: $creative_activities,
          talking_to_friends_family: $talking_to_friends_family,
          exercising: $exercising,
          professional_help: $professional_help,
          copingother: $copingother,
          coping_techniques: $coping_techniques,
          personal_stories: $personal_stories,
          reducing_stigma: $reducing_stigma,
          healthy_lifestyle: $healthy_lifestyle
        })
        RETURN n
        `,
        parameters
      )
      .then((result) => {
        //console.log(result.records[0].get('n'));
        session.close();
        driver.close();
      })
      .catch((error) => {
        console.error(error);
      });
    const verfied_code = generateCode();
    SendCode(
      req.body.values.email,
      verfied_code,
      req.body.values.firstName,
      req.body.values.SurName
    );

    const currentTime = moment();
    const newTime = currentTime.add(30, 'minutes');
    const formattedTime = newTime.format('HH:mm:ss');

    res.status(200).json({
      message: 'User created successfully',
      Code: verfied_code,
      ExpireTime: formattedTime,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
export const deleteAllNodes = async (req, res) => {
  const uri = process.env.NEO4J_URI;
  const user = process.env.NEO4J_USERNAME;
  const password = process.env.NEO4J_PASSWORD;

  try {
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();

    // Cypher query to delete all nodes and their relationships
    const cypherQuery = `
        MATCH (n)
        DETACH DELETE n
      `;

    // Run the query to delete all nodes
    const result = await session.run(cypherQuery);

    // Close the session and the driver
    await session.close();
    driver.close();

    // Check if any nodes were deleted
    if (result.summary.counters.nodesDeleted > 0) {
      res.status(200).json({ message: 'All nodes deleted successfully.' });
    } else {
      res.status(404).json({ message: 'No nodes found to delete.' });
    }
  } catch (error) {
    console.error('Error while deleting nodes:', error);
    res.status(500).json({ message: 'Server error while deleting nodes.' });
  }
}




export const ReSendCode = async (req, res) => {
  let verfied_code = generateCode();
  SendCode(req.body.email, verfied_code, req.body.values.firstName, req.body.values.SurName);
  const newTime = currentTime.add(30, 'minutes');
  const formattedTime = newTime.format('HH:mm:ss');
  res.json({ "Code": verfied_code, "ExpireTime": formattedTime })
}
export const VerfiedUser = async (req, res) => {
  const uri = process.env.NEO4J_URI;
  const user = process.env.NEO4J_USERNAME;
  const password = process.env.NEO4J_PASSWORD;
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  const session = driver.session();
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { email: req.body.email },
      { verification: true },
      { new: true }
    );

    // const result = await session.run(
    //   'MATCH (user:User {email: $email}) ' +
    //   'SET user.verification = true ' +
    //   'RETURN user',
    //   { email: req.body.email }
    // );

    if (updatedUser) {
      // if (updatedUser && result.records.length > 0)

      Users.findOne({ email: req.body.email }).then((doc) => {

        if (doc) {
          const token = jwt.sign(
            { user_id: doc._id },
            doc.username,
            {
              expiresIn: '2h',
            }
          );

          res.json({ "Status": "success", "Token": token });



        }

      })

    } else {
      res.json({ "Status": "error" });
    }
  } catch (error) {
    console.error('Error occurred while updating user:', error);
    res.status(500).json({ "Status": "error" });
  } finally {
    session.close();
    driver.close();
  }
}

export const VerifyUser = (req, res) => {

  const authorizationHeader = req.headers['authorization'];
  if (!authorizationHeader) {
  
    return res.status(401).send('Not authorized');
  }

  const token = authorizationHeader.split(' ')[1].replace(/"/g, '');
 
  const token_key=process.env.TOKEN_KEY




  try {
    // const token = req.headers['authorization']
    // const headers=token.split(" ")[1]
    // //console.log(headers);
    const pay = jwt.verify(token, token_key);

    res.json({ status: "Login" })

  }
  catch (e) {

    res.json({ status: "Unauthorized" })

  }



}

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email,password);
    

    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log(user.password,'user password')
    const passwordMatch = await comparePassword(password, user.password);
    console.log(passwordMatch,'password match')

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Wrong password' });
    }
    const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: '2h',
    });

    // //console.log(token)
    return res.json({ Token: token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
export const GetUsersInformation= (req, res) => {
  const authorizationHeader = req.headers['authorization'];
    if (!authorizationHeader) {
    
      return res.status(401).send('Not authorized');
    }

    const token = authorizationHeader.split(' ')[1].replace(/"/g, '');

    const secretKey = process.env.TOKEN_KEY;
    
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        // Token verification failed
        console.error('Token verification failed:', err);
      } else {
        jwt.verify(token, secretKey, (err, decoded) => {
          if (err) {
            // Token verification failed
            console.error('Token verification failed:', err);
          } else {
            //console.log(decoded.user_id);
            Users.findById(decoded.user_id).then((doc)=>{
              res.json({
                username: doc.username,
                firstname: doc.firstName,
                surname: doc.surName,
                profile_pic: doc.user_profile_pic
              });
            })
          }
        });
    
      }
    });

    // //console.log(cleanedToken);
    // const pay = jwt.verify(token, process.env.TOKEN_KEY);

    // // //console.log(pay.user_id);






}
export const RecommendedUserProfile = (req, res) => {
  const values = [];

  for (const key in req.body.Mental_health_insight) {
    if (req.body.Mental_health_insight[key]) {
      values.push(key);
    }
  }
  const orConditions = values.map(field => ({ [`Mental_Health_Insight.${field}`]: true }));

  const query = { $or: orConditions };

  Users.find(query).limit(8).then((doc) => {


    if (doc) {
      //console.log(doc);
      //console.log(doc.length)
      res.json({ "data": doc })
    }
    else {
      res.status(500).json({ "Status": "error" });

    }

  }
  )


}

export const AddingRandomDataNeo4j = async (req, res) => {

  const uri = process.env.NEO4J_URI
  const user = process.env.NEO4J_USERNAME
  const password = process.env.NEO4J_PASSWORD

  const resultPromise = session.run()


  resultPromise.then(result => {
    session.close();

    // on application exit:
    driver.close();
  });



}
const returnData = (type, res) => {
  // Check if res is defined and has a json method
  if (res && typeof res.json === 'function') {
    res.json({
      SupportGroup: type.SupportGroup,
      UserMentalHealthInsight: type.UserMentalHealthInsight,
      UserCoping: type.UserCoping,
      UsersDetail: type.UsersDetail,
      userProfile: type.userProfile,

    });
  } else {
    console.error('Invalid or undefined response object');
  }
};
function transformDataToArrays(data) {
  return Object.entries(data)
    .filter(([key, value]) => value === true)
    .map(([key, value]) => key);
}

const updateUserData = async (doc, username, client, res) => {
  const uri = process.env.NEO4J_URI;
  const user = process.env.NEO4J_USERNAME;
  const password = process.env.NEO4J_PASSWORD;
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  const session = driver.session();

  const cypherQuery = `
  MATCH (p:Users {username: '${username}'})-[:support_group]->()
  RETURN COUNT(p) AS count
`;







  const result = await session.run(cypherQuery);
  const count = result.records[0].get('count');
  const SupportGroup = [count.low];
  await session.close();
  driver.close();

  const UserMentalHealthInsight = transformDataToArrays(doc.Mental_Health_Insight);
  let StoryWord=StoryLength(doc.userStory)

  const UsersDetail = [
    {
      firstname: doc.firstName,
      surname: doc.surName,
      username: doc.username,
      user_profile_pic: doc.user_profile_pic,
      userStory: doc.userStory,
      user_cover_pic: doc.user_cover_pic,
      StoryWord:StoryWord
    }
  ];


  const UserCoping = transformDataToArrays(doc.Coping);

  const data = {
    SupportGroup: SupportGroup,
    UserMentalHealthInsight: UserMentalHealthInsight,
    UserCoping: UserCoping,
    UsersDetail: UsersDetail,
    userProfile: doc.userProfile,
  };

  const UserData = JSON.stringify(data);

//console.log(data)

  await client.set(username, UserData);
  const expirationInSeconds = 3600;
  client.expire(username, expirationInSeconds);
  const parsedUserData = JSON.parse(UserData);



  try { 
    res.json({
      SupportGroup: parsedUserData.SupportGroup,
      UserMentalHealthInsight: parsedUserData.UserMentalHealthInsight,
      UserCoping: parsedUserData.UserCoping,
      UsersDetail: parsedUserData.UsersDetail,
      userProfile: parsedUserData.userProfile,
    });
  } catch (error) {
    //console.log(error)
  }

  // returnData(parsedUserData,res)

};
export const GetUsersProfile = async (req, res) => {
  const username = req.body.username
  const client = createClient();
  await client.connect();
  const UserCheckBool = await client.exists(username)
  //console.log(UserCheckBool, 'ezaan amin')
  const value = await client.get(username);
  const UserData = JSON.parse(value);
  if (UserCheckBool == 1) {
    returnData(UserData, res)

  }
  else {
    const doc = await Users.findOne({ username: username })

    if (!doc) {
      return res.json({ status: "Account doesn't exist" });
    }

    updateUserData(doc, username, client,res)
  }
};

export const EditProfile = async (req, res) => {

  const username = req.body.username;
  const client = createClient();
  await client.connect();

  var myquery = { username: username };
  var newvalues = {
    $set: {
      firstName: req.body.firstName,
      surName: req.body.surName,
      userStory: req.body.userStory,
      user_cover_pic: req.body.user_cover_pic,
      user_profile_pic: req.body.user_profile_pic,



    }
  }

  Users.updateOne(myquery, newvalues)
    .then((doc) => {

      if (doc) {

        client.del(username, (err, reply) => {
          if (err) {
            console.error("Error deleting user data from Redis:", err);
          }
          else {
            Users.find({ username: username }).then((doc) => {
              if (doc) {
                updateUserData(doc, username, client)

              }
            })

          }

        });
        res.status(200).send("Successful");

      }
    })
    .catch((err) => {

      if (err) {
        res.status(500).send("Error");
      }
    });

}

export const UserFriends = async (req, res) => {
  const authorizationHeader = req.headers['authorization'];
  // console.log(authorizationHeader,'header token');
  let token;
  token = authorizationHeader.split(' ')[1].replace(/"/g, '');

let username;
// console.log(username,'username')
let token_type="user"
  let user_id= await Authentication(token,token_type);
let doc;

  if(user_id)
    {
      doc=await Users.findById(user_id);
      username =doc.username

    }
    else
    {
      res.json({error:"error"})
    }

  const client = createClient();
  await client.connect();
  var userFriends = username + "__friends"
  const value = await client.get(userFriends);
  const UserData = JSON.parse(value);
  if (value == 1) {
    res.json({ friends: UserData })
  }
  else {
    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USERNAME;
    const password = process.env.NEO4J_PASSWORD;
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();
    var support_group = {};
    const cypherQuery = `
  MATCH (p:Users {username: '${username}'})-[:support_group]->(friend)
  RETURN friend.firstName AS firstName, friend.surName AS surname, friend.username as Username,friend.user_profile_pic as profile_pic;
`;
    const result = await session.run(cypherQuery);
    const friends_length = result.records.length
    for (let i = 0; i < friends_length; i++) {
      {
        const friend_first_name = result.records[i]._fields[0]
        const friend_surName = result.records[i]._fields[1]
        const friend_username = result.records[i]._fields[2]
        const friend_profile_pic = result.records[i]._fields[3]
        // //console.log(" " + friend_username)
        var fullFriendName = friend_first_name + " " + friend_surName
        support_group[fullFriendName] = {
          username: friend_username,
          profile_pic: friend_profile_pic,
        };
      }
    }
    await client.set(userFriends, JSON.stringify(support_group));
    res.json({ support_group: support_group })
  }
}

export const Neo4jTesting = async (req, res) => {

    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USERNAME;
    const password = process.env.NEO4J_PASSWORD;
    
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();

    const cypherQuery = `
    MATCH (p:Users {username: "LSmith123"})-[:support_group]->()
    WITH COUNT(p) AS count
    
    MATCH (n:Users {username: "LSmith123"})-[:Authors]->(a:Mindful_Moments)
    RETURN count, COLLECT(a.Mindful_Moments) AS Mindful_Moments
  `;
  


    {/*

for NEO4j the format is :


      MATCH (p:Users {username: "LSmith123"})-[:support_group]->()
      WITH COUNT(p) AS count
      
      MATCH p=(n:Users {username: "LSmith123"})-[:Authors]->(a:`MindFul Moments`)
      RETURN count, COLLECT(a.Mindful_Moments) AS Mindful_Moments
*/}

    const result = await session.run(cypherQuery);

    const { count, Mindful_Moments } = result.records[0].toObject();

    //console.log(count.low,Mindful_Moments)


    res.json({support_group:count.low,Mindful_Moments:Mindful_Moments})
  
}
export const UsersMindFulMoments = async (req, res) => {

  const { username } = req.body;
  const uri = process.env.NEO4J_URI;
  const user = process.env.NEO4J_USERNAME;
  const password = process.env.NEO4J_PASSWORD;


  const UsernameMindfulMoment = `${username}MindFulMoments`;
  const userMindfulMomentsCheck = await client.exists(UsernameMindfulMoment);

  if (userMindfulMomentsCheck === 1) {
    const value = await client.get(UsernameMindfulMoment);
    const userData = JSON.parse(value);
    res.json(userData);
  }
  else
  {
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();


    

  }







}

export const AuthenticateUser = async (req, res) => {
  const authorizationHeader = req.headers['authorization'];

  let token;
  token = authorizationHeader.split(' ')[1].replace(/"/g, '');
  token=token.replace(/"/g, '');


  let token_type="user"
console.log(token);
let user_id;
try
{
  user_id=await Authentication(token,token_type);


}
catch(error)
{
  res.json({ message: "not verified" });

}
console.log(user_id)
  if(user_id!='not verified')
    {
      res.json({message:"sucess"})

    }
    else
    {
      res.json({ message: "not verified" });

    }







}
