import bcrypt from "bcrypt"
import nodemailer from "nodemailer"
import moment from  "moment"
import neo4j, { auth } from "neo4j-driver"
import jwt from "jsonwebtoken"
import { Users } from "../model/users.js"
function generateCode() {
  const min = 100000; 
  const max = 999999; 
  return Math.floor(Math.random() * (max - min + 1)) + min;
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



async function SendCode(email,code,firstName,LastName)
{

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
     user: process.env.EMAIL_ADDRESS,
     pass:process.env.PASSWORD,
    },
   });

  


  const info = await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS, 
    to: email,
    subject: "Heal Together Verification Code ",
    text: `Dear ${firstName } ${LastName} your Heal Together Verification Code  is ${code}. This code will expire within 30 mins`, // plain text body

  });

console.log(info)
}

export const NewUser = async (req, res) => {
  try {
    const existingUser = await Users.findOne({ email: req.body.values.email });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(req.body.values.password, 10);
    const newUser = {
      firstName: req.body.values.firstName,
      surName: req.body.values.SurName,
      email: req.body.values.email,
      username:req.body.values.username,
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
Mental_Health_Insight:{

  depression: req.body.Mental_health_insight_Question.depression,
        anxiety: req.body.Mental_health_insight_Question.anxiety,
        bipolar: req.body.Mental_health_insight_Question.bipolar,
        ptsd: req.body.Mental_health_insight_Question.ptsd,
        ocd: req.body.Mental_health_insight_Question.ocd,
        schizophrenia: req.body.Mental_health_insight_Question.schizophrenia,
        eatingDisorders: req.body.Mental_health_insight_Question.eatingDisorders,
        other: req.body.Mental_health_insight_Question.other,
},
Coping:{

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
        console.log(result.records[0].get('n'));
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




export const ReSendCode=async (req, res) => {

    let verfied_code=generateCode();

    SendCode(req.body.email,verfied_code,req.body.values.firstName,req.body.values.SurName);

    const newTime = currentTime.add(30, 'minutes');

const formattedTime = newTime.format('HH:mm:ss');


res.json({"Code":verfied_code,"ExpireTime":formattedTime})





  




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
        console.log("Ezaan Rules")
Users.findOne({email:req.body.email}).then((doc)=>{

  if(doc)
  {
    const token = jwt.sign(
      { user_id: doc._id },
      process.env.TOKEN_KEY,
      {
        expiresIn: '2h',
      }
    );
    console.log(token)
    res.json({ "Status": "success","Token":token });

    

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
  
  export const VerifyUser =(req, res) => {

      try{
        const token = req.headers['authorization']
        const headers=token.split(" ")[1]
        console.log(headers);
        const pay= jwt.verify(String(headers),process.env.TOKEN_KEY);
 console.log(pay.user_id,'ezaan amin')
        res.json({"Token":pay.user_id})
   
        }
      catch(e){
        console.log("Not authorized")
        res.status(401).send();
    }
  
  // console.log("hii")
  
    }

  export const LoginUser = (req, res) => {

    const email = req.body.email;
  
   

    Users.findOne({ email: email }).then((doc) => {
      if (doc) {
        comparePassword(req.body.password, doc.password)
          .then((result) => {
            if (result) {



              const token = jwt.sign(
                { user_id: doc._id },
                process.env.TOKEN_KEY,
                {
                  expiresIn: '2h',
                }
              );
              // console.log(doc.gender)
res.json({"Token": token,gender:doc.gender,firstName:doc.firstName,SurName:doc.surName})             
            } else {
              res.json('Wrong password');
            }
          })
          .catch((error) => {
            console.error('Error comparing passwords:', error);
          });
      } else {
        console.log("User not found")
        res.json({ status: 'Wrong Email or User Not Found' });
      }
    });
  };

export const RecommendedUserProfile  = (req, res) => {
const values=[];

for (const key in req.body.Mental_health_insight) {
  if (req.body.Mental_health_insight[key]) {
   values.push(key);
  }
}
const orConditions = values.map(field => ({ [`Mental_Health_Insight.${field}`]: true }));

const query = { $or: orConditions };

Users.find(query).limit(8).then((doc)=>{


if(doc)
{
  console.log(doc);
  console.log(doc.length)
  res.json({"data":doc})
}
else
{
  res.status(500).json({ "Status": "error" });

}

}
)


}

export const AddingRandomDataNeo4j= async (req, res) => {

  const uri = process.env.NEO4J_URI
  const user = process.env.NEO4J_USERNAME
  const password =process.env.NEO4J_PASSWORD

  const resultPromise = session.run()


  resultPromise.then(result => {
    session.close();
  
    // on application exit:
    driver.close();
  });



}

export const GetUsersProfile = async (req, res) => {
  try {
    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USERNAME;
    const password = process.env.NEO4J_PASSWORD;
 
    const UsersDetail = [];
    const support_group = [];
    const username=req.body.username
    const doc = await Users.findOne({username:username})
    
    if (!doc) {
      return res.json({status:"Account doesn't exist"});
    }
  
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();
    
    const cypherQuery = `
      MATCH (p:Users {firstName: "Leo"})-[:support_group]->()
      RETURN COUNT(p) AS count
    `;
    
    const result = await session.run(cypherQuery);
    const count = result.records[0].get('count');
    support_group.push(count.low);
    
    await session.close();
    driver.close();
    
  

    
    const User_Mental_Health_Insight = Object.entries(doc.Mental_Health_Insight)
    .filter(([key, value]) => value === true)
    .map(([key, value]) => key);
    
    UsersDetail.push({
      firstname: doc.firstName,
      surname: doc.surName,
      username: doc.username,
      user_profile_pic: doc.user_profile_pic,
      myStory:doc.userStory,
      cover_photo:doc.user_cover_pic
    });
    
    // console.log(support_group);
    // console.log(User_Mental_Health_Insight);

    // console.log(UsersDetail);
    // console.log(doc.Coping)
    const trueCopingMethods = Object.entries(doc.Coping)
  .filter(([key, value]) => value === true)
  .map(([key, value]) => key);

console.log(trueCopingMethods)
    res.json({support_group:support_group,User_Mental_Health_Insight:User_Mental_Health_Insight,User_Coping:trueCopingMethods,UsersDetail:UsersDetail})
  
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

