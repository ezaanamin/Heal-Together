import { Server } from "socket.io";
import { Authentication } from "../controllers/authentication.js";
import Conversation from "../model/Conversation.js";
import Message from "../model/Message.js";

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log("User Connected", socket.id);

    socket.on("setup", async (userData) => {
      let token_type = "user";
      let token = userData.replace(/"/g, '');
      try {
        let user_id = await Authentication(token, token_type);
        if (user_id) {
          socket.join(user_id);
          console.log("User joined room: " + user_id);
        } else {
          console.log("User authentication failed");
        }
      } catch (error) {
        console.log(error);
      }
    });

    socket.on("join_room", async (chat_token) => {
      let token_type = "chat";
      let token = chat_token.replace(/"/g, '');
      try {
        let con_id = await Authentication(token, token_type);
        if (con_id) {
          socket.join(con_id);
          console.log("User joined room: " + con_id);
        } else {
          console.log("Chat authentication failed");
        }
      } catch (error) {
        console.log(error);
      }
    });

    socket.on("new_message", async (new_message) => {
      console.log(new_message.chatToken);

      if (new_message.chatToken && new_message.Usertoken) {
        let chattoken = new_message.chatToken.replace(/"/g, '');
        let usertoken = new_message.Usertoken.replace(/"/g, '');

        try {
          const chat_id = await Authentication(chattoken, "chat");
          const user_id = await Authentication(usertoken, 'user');

          if (chat_id && user_id) {
            const users = await Conversation.findById(chat_id);
            const NewMessage = {
              conversationId: chat_id,
              senderId: user_id,
              message: new_message.message
            };

            let createdMessage = await Message.create(NewMessage);
            const isoString = createdMessage.createdAt.toISOString();
            const datePart = isoString.split('T')[0];
            const timePart = isoString.split('T')[1];
            const timeWithoutSeconds = timePart.substring(0, 5);

            const messageData = [
              timeWithoutSeconds,
              datePart,
             false,
             new_message.message,
         
          
            ]
           
            if (users) {
              for (let memberId of users.members) {
                if (memberId.toString() !== user_id.toString()) {
                  io.to(memberId).emit("message_received", messageData);
                  console.log(`Message sent to user ID: ${memberId}`);
                }
              }
            } else {
              console.log("No users found for chat ID:", chat_id);
            }
          } else {
            console.log("Authentication failed for new message");
          }
        } catch (err) {
          console.error("Error sending new message:", err.message);
        }
      } else {
        console.log("No chat token or user token provided");
      }
    });
  });

  return io;
};

export default setupSocket;
