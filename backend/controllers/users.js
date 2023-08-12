import Users from "../model/users.js"
import bcrypt from "bcrypt"
import nodemailer from "nodemailer"
import moment from  "moment"
import neo4j, { auth } from "neo4j-driver"
import jwt from "jsonwebtoken"


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

  console.log(req.body)
  res.send("hiii")

  const uri = process.env.NEO4J_URI
const user = process.env.NEO4J_USERNAME
const password =process.env.NEO4J_PASSWORD


  //  const month = convertMonthToInt(req.body.values.month);

  //  const year=req.body.values.year
  //  const day=req.body.values.day


  //  if (day > getDaysInMonth(year, month)) {
  //   // Invalid day
  //   res.send("Wrong Date")
  // }

    /*
    firstName:String,
    SurName:String,
    dateOfBith:Date,
    email:String,
    age:Number,
    password:String,
    Gender:String,


*/

// bcrypt.hash(req.body.values.password, 10, (err, hash) => {

//   if (err) {
//     console.error(err);
//     return;
//   }

//   else
//   {

//     const newUser={
//       firstName:req.body.values.firstName,
//       SurName:req.body.values.SurName,
//       email:req.body.values.email,
//       dateOfBirth:myDate.toISOString(),
//       Gender:req.body.values.gender,
//       age:age,
//       password:hash,
//       verification:false
    
//      }

   



//     let verfied_code=generateCode();
//     //console.log(verfied_code)
//     SendCode(req.body.values.email,verfied_code,req.body.values.firstName,req.body.values.SurName)
//     const currentTime = moment();

// const newTime = currentTime.add(30, 'minutes');

// const formattedTime = newTime.format('HH:mm:ss');


// Users.create(newUser).then((doc)=>{

//   if(doc)
//   {
//     const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
//     const session = driver.session();

//     const resultPromise = session.run(
//       'CREATE (n:User {firstName: $firstName, SurName: $SurName, email: $email, dateOfBirth: $dateOfBirth, Gender: $Gender, age: $age, password: $password,verification:false}) RETURN n',
//       newUser
//     );
    
//     resultPromise.then(result => {
//       session.close();
    
//       // on application exit:
//       driver.close();
//     });



//     res.json({"Code":verfied_code,"ExpireTime":formattedTime})
//   }
//   else
//   {
//     res.json("Error")

//   }

// })
// }
//   })
    }
  
 
  export const deleteAllNodes = async (req, res) => {
    const uri = process.env.NEO4J_URI
    const user = process.env.NEO4J_USERNAME
    const password =process.env.NEO4J_PASSWORD
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
      if (result.summary.counters.nodesDeleted() > 0) {
        res.status(200).json({ message: 'All nodes deleted successfully.' });
      } else {
        res.status(404).json({ message: 'No nodes found to delete.' });
      }
    } catch (error) {
      console.error('Error while deleting nodes:', error);
      res.status(500).json({ message: 'Server error while deleting nodes.' });
    }
  };
  








function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }


  function convertMonthToInt(monthStr) {
    const monthsMap = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };
  
    return monthsMap[monthStr];
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
