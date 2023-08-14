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
    subject: "SocialXPress Verification Code ",
    text: `Dear ${firstName } ${LastName} your SocialXPress Verification Code  is ${code}. This code will expire within 30 mins`, // plain text body

  });

console.log(info)
}





export const NewUser=  async (req, res) => {

  console.log(req.body);


Users.findOne({email: req.body.values.email}).then((doc)=>{

if(doc)
{
  return res.status(2004).send({ error: 'User Exist' })

}
else
{






  const uri = process.env.NEO4J_URI
const user = process.env.NEO4J_USERNAME
const password =process.env.NEO4J_PASSWORD
    // firstName:String,
    // SurName:String,
    // dateOfBith:Date,
    // email:String,
    // age:Number,
    // password:String,
    // Gender:String,



bcrypt.hash(req.body.values.password, 10, (err, hash) => {

  if (err) {
    console.error(err);
    return;
  }

  else
  {

    const newUser = {
      firstName: req.body.values.firstName,
      surName: req.body.values.SurName,
      email: req.body.values.email,
      password: hash,
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
      interestsAndQuestions: {
        depression: req.body.Coping_and_Interest_Questions.depression,
        anxiety: req.body.Coping_and_Interest_Questions.anxiety,
        bipolar: req.body.Coping_and_Interest_Questions.bipolar,
        ptsd: req.body.Coping_and_Interest_Questions.ptsd,
        ocd: req.body.Coping_and_Interest_Questions.ocd,
        schizophrenia: req.body.Coping_and_Interest_Questions.schizophrenia,
        eatingDisorders: req.body.Coping_and_Interest_Questions.eatingDisorders,
        other: req.body.Coping_and_Interest_Questions.other,
        eating_disorders: req.body.Coping_and_Interest_Questions.eating_disorders,
        copingTechniques: req.body.Coping_and_Interest_Questions.copingTechniques,
        personalStories: req.body.Coping_and_Interest_Questions.personalStories,
        medication: req.body.Coping_and_Interest_Questions.medication,
        reducingStigma: req.body.Coping_and_Interest_Questions.reducingStigma,
        healthyLifestyle: req.body.Coping_and_Interest_Questions.healthyLifestyle,
        spirituality: req.body.Coping_and_Interest_Questions.spirituality,
        otherInterests: req.body.Coping_and_Interest_Questions.otherInterests,
        meditation: req.body.Coping_and_Interest_Questions.meditation,
        creativeActivities: req.body.Coping_and_Interest_Questions.creativeActivities,
        talkToFriends: req.body.Coping_and_Interest_Questions.talkToFriends,
        exercise: req.body.Coping_and_Interest_Questions.exercise,
        seekingHelp: req.body.Coping_and_Interest_Questions.seekingHelp,
        otherCoping: req.body.Coping_and_Interest_Questions.otherCoping,
        creative_activities: req.body.Coping_and_Interest_Questions.creative_activities,
        talking_to_friends_family: req.body.Coping_and_Interest_Questions.talking_to_friends_family,
        exercising: req.body.Coping_and_Interest_Questions.exercising,
        professional_help: req.body.Coping_and_Interest_Questions.professional_help,
        personal_stories: req.body.Coping_and_Interest_Questions.personal_stories,
        reducing_stigma: req.body.Coping_and_Interest_Questions.reducing_stigma,
        healthy_lifestyle: req.body.Coping_and_Interest_Questions.healthy_lifestyle
      },
    };
    
console.log(newUser)   



    let verfied_code=generateCode();
    //console.log(verfied_code)
    SendCode(req.body.values.email,verfied_code,req.body.values.firstName,req.body.values.SurName)
    const currentTime = moment();

const newTime = currentTime.add(30, 'minutes');

const formattedTime = newTime.format('HH:mm:ss');

Users.create(newUser).then((doc)=>{

  if(doc)
  {
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();

    const resultPromise = session.run(
      'CREATE (n:User {firstName: $firstName, surName: $surName, email: $email, age: $age, password: $password, verification: $verification, ' +
      'primary_motivation: $primary_motivation, professional_treatment: $professional_treatment, comfortable_discussing_mental_health: $comfortable_discussing_mental_health, ' +
      'connect_with_others: $connect_with_others, religious: $religious, received_a_diagnosis: $received_a_diagnosis, gender_identity: $gender_identity, ' +
      'sexual_orientation: $sexual_orientation, religious_identity: $religious_identity, ' +
      'depression: $depression, anxiety: $anxiety, bipolar: $bipolar, ptsd: $ptsd, ocd: $ocd, schizophrenia: $schizophrenia, eatingDisorders: $eatingDisorders, ' +
      'other: $other, eating_disorders: $eating_disorders, copingTechniques: $copingTechniques, personalStories: $personalStories, medication: $medication, ' +
      'reducingStigma: $reducingStigma, healthyLifestyle: $healthyLifestyle, spirituality: $spirituality, otherInterests: $otherInterests, ' +
      'meditation: $meditation, creativeActivities: $creativeActivities, talkToFriends: $talkToFriends, exercise: $exercise, seekingHelp: $seekingHelp, ' +
      'otherCoping: $otherCoping, creative_activities: $creative_activities, talking_to_friends_family: $talking_to_friends_family, exercising: $exercising, ' +
      'professional_help: $professional_help, copingother: $copingother, coping_techniques: $coping_techniques, personal_stories: $personal_stories, ' +
      'reducing_stigma: $reducing_stigma, healthy_lifestyle: $healthy_lifestyle}) RETURN n',
      {
        firstName: newUser.firstName,
        surName: newUser.surName,
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
        depression: newUser.interestsAndQuestions.depression,
        anxiety: newUser.interestsAndQuestions.anxiety,
        bipolar: newUser.interestsAndQuestions.bipolar,
        ptsd: newUser.interestsAndQuestions.ptsd,
        ocd: newUser.interestsAndQuestions.ocd,
        schizophrenia: newUser.interestsAndQuestions.schizophrenia,
        eatingDisorders: newUser.interestsAndQuestions.eatingDisorders,
        other: newUser.interestsAndQuestions.other,
        eating_disorders: newUser.interestsAndQuestions.eating_disorders,
        copingTechniques: newUser.interestsAndQuestions.copingTechniques,
        personalStories: newUser.interestsAndQuestions.personalStories,
        medication: newUser.interestsAndQuestions.medication,
        reducingStigma: newUser.interestsAndQuestions.reducingStigma,
        healthyLifestyle: newUser.interestsAndQuestions.healthyLifestyle,
        spirituality: newUser.interestsAndQuestions.spirituality,
        otherInterests: newUser.interestsAndQuestions.otherInterests,
        meditation: newUser.interestsAndQuestions.meditation,
        creativeActivities: newUser.interestsAndQuestions.creativeActivities,
        talkToFriends: newUser.interestsAndQuestions.talkToFriends,
        exercise: newUser.interestsAndQuestions.exercise,
        seekingHelp: newUser.interestsAndQuestions.seekingHelp,
        otherCoping: newUser.interestsAndQuestions.otherCoping,
        creative_activities: newUser.interestsAndQuestions.creative_activities,
        talking_to_friends_family: newUser.interestsAndQuestions.talking_to_friends_family,
        exercising: newUser.interestsAndQuestions.exercising,
        professional_help: newUser.interestsAndQuestions.professional_help,
        copingother: newUser.interestsAndQuestions.otherCoping,
        coping_techniques: newUser.interestsAndQuestions.copingTechniques,
        personal_stories: newUser.interestsAndQuestions.personal_stories,
        reducing_stigma: newUser.interestsAndQuestions.reducing_stigma,
        healthy_lifestyle: newUser.interestsAndQuestions.healthy_lifestyle
      }
    );
    resultPromise.then(result => {
      session.close();
    
      // on application exit:
      driver.close();
    });



    res.json({"Code":verfied_code,"ExpireTime":formattedTime})
  }
  else
  {
    res.json("Error")

  }

})
}
  })
}

})
    }
  
 
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

      const result = await session.run(
        'MATCH (user:User {email: $email}) ' +
        'SET user.verification = true ' +
        'RETURN user',
        { email: req.body.email }
      );
  
      if (updatedUser && result.records.length > 0) {
        res.json({ "Status": "success" });
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
res.json({"Token": token})             
            } else {
              res.json('Wrong password');
            }
          })
          .catch((error) => {
            console.error('Error comparing passwords:', error);
          });
      } else {
        res.json({ status: 'Wrong Email' });
      }
    });
  };
