// socket.js
import { Server } from "socket.io";
import { Authentication } from "../controllers/authentication.js";

const setupSocket = (server) => {
    let token;
  const io = new Server(server, {
    // pingTimeout: 60000,
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", async (socket) => { 
    console.log("User Connected", socket.id);


    socket.on("setup", async (userData) => {
       let token_type="user"
      // console.log(userData,'userdata')
let   token = userData.replace(/"/g, '');

// console.log(token,'socket token');
 

      let user_id=await Authentication(token,token_type)
      socket.join(user_id);
    });

    socket.on("join_room",async(chat_token)=>{
    let token_type="chat"
    let   token = chat_token.replace(/"/g, '');
    let con_id=await Authentication(token,token_type)
    socket.join(con_id);

    console.log("User join room"  +  con_id)




    })



  });

  return io;
};

export default setupSocket;
