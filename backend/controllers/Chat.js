import { Users } from "../model/users.js";
import { Authentication } from "./authentication.js"
import Conversation from "../model/Conversation.js";
import jwt from "jsonwebtoken"

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
  console.log(member);
let key= process.env.TOKEN_CHAT_KEY 
console.log(key)
  Conversation.insertMany({members:member}).then((doc)=>{
    if(doc)
      {
        // console.log("sucess")
        console.log(doc._id)
        res.json({status:"sucess"})
        const token = jwt.sign(
          {
            conversation_id: con[0]._id.toString(),
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
console.log(key)

  console.log('Conversation found:', con[0]._id.toString());


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