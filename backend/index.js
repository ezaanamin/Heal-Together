import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import UserRoutes from "./routes/users.js"
import { userData } from "./userData.js"
import neo4j from "neo4j-driver"
import cookieParser from "cookie-parser"
import { Users } from "./model/users.js"
import { sampleUsers } from './sampleUser.js';
import multer from "multer"
import { MongoClient } from 'mongodb';

import ObjectsToCsv from "objects-to-csv"

const app=express()
dotenv.config();
app.use(cors())
app.use(cookieParser());





app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}))
app.use('/upload',express.static('upload'))

app.use("/users",UserRoutes);

app.use(cors())
app.get("/",(req,res)=>{
  res.json("hiii")
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/home/ezaan-amin/Documents/Programming/Profiolo/Heal-Together/backend/upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  console.log(file)
  res.status(200).json(file.filename);
});

app.post("/test",(req,res)=>{
 console.log(req.body)
})
const PORT = process.env.PORT || 4000;
const uri = process.env.NEO4J_URI
const user = process.env.NEO4J_USERNAME
const password =process.env.NEO4J_PASSWORD
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();


// const tx = session.beginTransaction();

// try {
//   // Insert user data into Neo4j
//   for (const user of userData) {
//     await tx.run(
//        'CREATE (n:User {firstName: $firstName, SurName: $SurName, email: $email, dateOfBirth: $dateOfBirth, Gender: $Gender, age: $age, password: $password}) RETURN n',

//       {
//         firstName: user.firstName,
//         SurName: user.SurName,
//         email: user.email,
//         age: user.age,
//         Gender:user.gender,
//         password: user.password,
//         dateOfBirth: String(user.dateOfBirth)

//       }
//     );
//   }

//   await tx.commit();
//   console.log('Data inserted successfully.');
// } catch (error) {
//   await tx.rollback();
//   console.error('Error inserting data:', error);
// } finally {
//   session.close();
//   driver.close();
// }



 //Users.insertMany(userData)

//  (async () => {
//   const csv = new ObjectsToCsv(sampleUsers);
 
//   // Save to file:
//   await csv.toDisk('/home/ezaan-amin/Documents/Programming/Profiolo/Heal-Together/backend/data.csv');
 
//   // Return the CSV file as string:
//   console.log(await csv.toString());
// })();

// Connection URI (replace with your MongoDB connection string)


// Create a new MongoClient

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
    
  })
  .then(() => {
    // console.log(currentYear)
    // if( currentYear==2023)
    // {

    //   DataBaseSales(currentYear)

    // }


  

   

    // Rider.updateMany(
    //   {}, // Empty filter to update all documents in the collection
    //   { $set: { assigned_order: [] } }
    // ).then((doc)=>{
    //   console.log(doc)
    
    // })    
  
   
    
   console.log("Connected")
   app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

})
  .catch((error) => console.log(`${error} did not connect`));
