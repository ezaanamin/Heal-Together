import { Users } from "../model/users.js";
import { Authentication } from "./authentication.js"
import Conversation from "../model/Conversation.js";
import jwt from "jsonwebtoken"
import Message from "../model/Message.js";

export const GetConverstionID = async (req, res) => {
    const authorizationHeader = req.headers['authorization'];
    let token;
    token = authorizationHeader.split(' ')[1].replace(/"/g, '');

    let received_name=req.body.received_name;
// console.log(received_name)

    const user = await Users.findOne({ username: received_name });

    if (!user) {
      throw new Error(`User with username ${received_name} not found`);
    }
    const received_id = user._id;
    let token_type="user"

    const user_id=await Authentication(token,token_type);

    // console.log(user_id,'ezaan');
    // console.log(received_id.toString(), 'amin');

  let con=  await Conversation.find({ members : { $all : [user_id, received_id.toString()] }});

if (con.length === 0) {
  // console.log('No conversation found');

  let member=[];
  member.push(user_id, received_id.toString());
  // console.log(member);
let key= process.env.TOKEN_CHAT_KEY 
console.log(key)
  Conversation.insertMany({members:member}).then((doc)=>{
    if(doc)
      {
        // console.log("sucess")
        // console.log(doc[0]._id,'id')
        // res.json({status:"sucess"})
        const token = jwt.sign(
          {
            conversation_id:doc[0]._id.toString(),
          },
          key, 
          { algorithm: 'HS256' } 
        );
        res.json({"token":token})


      }
      else
      {
        res.json({status:"error"})

      }
      
  })
} else {
let key= process.env.TOKEN_CHAT_KEY 
// console.log(key)
  // console.log('Conversation found:', con[0]._id.toString());
  const token = jwt.sign(
    {
      conversation_id: con[0]._id.toString(),
    },
    key, 
    { algorithm: 'HS256' } 
  );

  // console.log(token,'token')
  res.json({"token":token})
}
}

function convertDateToDay(data) {
  const date = new Date(data.date);
  const dayNumber = date.getDay();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[dayNumber];
  data.day = dayName;
}

export const GetChat= async (req, res) => {
  const authorizationHeader = req.headers['authorization'];
  const chatToken = req.headers['chattoken']; 
  // console.log(authorizationHeader,'token')
  let authorization_token;
  let chat_token;
  // console.log(authorizationHeader,'token1')
  // console.log(chatToken,'token2');
  authorization_token = authorizationHeader.split(' ')[1].replace(/"/g, '');
  chat_token=chatToken.split(' ')[1].replace(/"/g, '');
  let authorization_type="user";
  let chat_token_key="chat";
  console.log(authorization_token,'token1')
  console.log(chat_token,'token2')
  const conversation_id= await Authentication(chat_token,chat_token_key);
  const user_id= await Authentication(authorization_token,authorization_type);
  // console.log(conversation_id,'chat id');
  // console.log(user_id,'user_id')

  let con=await Message.find({conversationId:conversation_id});

  var allmessage = [];
  let data={message:"",sender:false};
 
  for (let i=0;i<con.length;i++)
    {
      let messageData = { message: con[i].message}
      console.log(con[i].message,i)
      const isoString = con[i].createdAt.toISOString();
  
      const datePart = isoString.split('T')[0];
      const timePart = isoString.split('T')[1]; 
      const timeWithoutSeconds = timePart.substring(0, 5); 
      messageData['time']=timeWithoutSeconds;
    
      messageData['date']=datePart;

      convertDateToDay(data);
      if(con[i].senderId==user_id)
        {
          messageData['sender']=true;

          
        }
        else
        {
          messageData['sender']=false;

        }
   
        allmessage.push(messageData)
      
    }  
    res.json({"message":allmessage});
    }

 