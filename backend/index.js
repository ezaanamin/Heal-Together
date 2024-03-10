import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./routes/users.js";
import MindFulMomentsRoutes from "./routes/MindFulMoments.js";
import multer from "multer";
import { Server } from "socket.io";
import http from "http";
import cookieParser from "cookie-parser";

const app = express();
const server = http.createServer(app);

dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/upload', express.static('upload'));
app.use("/users", UserRoutes);
app.use('/mindful_moments', MindFulMomentsRoutes);

const io=new Server(server,{
  cors:{
      origin:process.env.FRONTEND_PORT,
      methods:["GET","POST"]
  }
});

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

// REST API endpoint to test the server
app.get("/", (req, res) => {
  res.json("hiii");
});

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// File upload endpoint
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const uploadedFile = req.file;
  res.status(200).send('File uploaded successfully.');
});

// Test endpoint for POST request
app.post("/test", (req, res) => {
  console.log(req.body);
});
const dataArray = [];

// // Create the data 24 times with true/false values and add it to the array
// for (let i = 0; i < 24; i++) {
//   const data = {
//     Mental_Health_Insight: {
//       depression: Math.random() < 0.5,
//       anxiety: Math.random() < 0.5,
//       bipolar: Math.random() < 0.5,
//       ptsd: Math.random() < 0.5,
//       ocd: Math.random() < 0.5,
//       schizophrenia: Math.random() < 0.5,
//       eatingDisorders: Math.random() < 0.5,
//       other: Math.random() < 0.5,
//     },
//     Interests: {
//       copingTechniques: Math.random() < 0.5,
//       personalStories: Math.random() < 0.5,
//       medication: Math.random() < 0.5,
//       reducingStigma: Math.random() < 0.5,
//       healthyLifestyle: Math.random() < 0.5,
//       spirituality: Math.random() < 0.5,
//       otherInterests: Math.random() < 0.5,
//     },
//     Coping: {
//       meditation: Math.random() < 0.5,
//       creativeActivities: Math.random() < 0.5,
//       talkToFriends: Math.random() < 0.5,
//       exercise: Math.random() < 0.5,
//       seekingHelp: Math.random() < 0.5,
//       otherCoping: Math.random() < 0.5,
//     },
//     pendingFriends: [],
//   };
//   dataArray.push(data);
// }

// console.log(dataArray);
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




//  (async () => {
//   const csv = new ObjectsToCsv(sampleUsers);
 
//   // Save to file:
//   await csv.toDisk('/home/ezaan-amin/Documents/Profolio/Heal-Together/backend/userdata5.csv');
 
//   // Return the CSV file as string:
//   // console.log(await csv.toString());
// })();

// Connection URI (replace with your MongoDB connection string)


// Create a new MongoClient
// Users.find({}).then((doc)=>{
//   if(doc)
//   {
//     console.log(doc)
//   }
// })
const PORT = process.env.PORT || 4000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

export { io }; 