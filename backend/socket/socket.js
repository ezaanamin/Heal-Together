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
       let token_type="chat"
      console.log(userData,'userdata')
      let h=await Authentication(userData,token_type)
console.log(h)
    

      // socket.join(userData._id);
      // socket.emit("connected");
    });
  });

  return io;
};

export default setupSocket;
