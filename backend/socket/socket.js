// socket.js
import { Server } from "socket.io";
// import { Authentication } from "../controllers/authentication.js";

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


    socket.on("setup", (userData) => {
      console.log(userData,'userdata')
    //     const h = await Authentication(token);

    //     if(h!='error')
    //       {
  
    //       }
        
    //   //   console.log(h)

      // socket.join(userData._id);
      // socket.emit("connected");
    });
  });

  return io;
};

export default setupSocket;
