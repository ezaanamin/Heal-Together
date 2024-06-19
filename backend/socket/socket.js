// socket.js
import { Server } from "socket.io";
import { Authentication } from "../controllers/authentication.js";
import Conversation from "../model/Conversation.js";

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




    });


    socket.on("new_message", async (new_message) => {
      const { chatToken, message } = new_message;
      console.log(new_message.chatToken)
      
      if (new_message.chatToken && new_message.Usertoken) {
        let   chattoken = new_message.chatToken.replace(/"/g, '');
        let usertoken=new_message.Usertoken.replace(/"/g, '');
        try {
          const chat_id = await Authentication(chattoken, "chat");
          const user_id= await Authentication(usertoken,'user');

          if (chat_id) {
            // console.log(`Message sent to chat room ${chat_id}`);
           const users= await Conversation.findById(chat_id)
           
          if( users)
            {
              for (let memberId of users.members)
                {
                  if(memberId==user_id)
                    {
                      console.log("nothing")
                    }
                    else
                    {
                      io.in(memberId).emit("message_received", message);
                      console.log(`Message sent to user id  ${memberId}`);

                    }

                }
            }


          } else {
            console.log("Authentication failed for new message");
          }
        } catch (err) {
          console.error("Error sending new message:", err.message);
        }
      } else {
        console.log("No chat token provided");
      }
    });




  });

  return io;
};

export default setupSocket;
