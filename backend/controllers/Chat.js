import { Users } from "../model/users.js";
import { Authentication } from "./authentication.js"

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
    const user_id=await Authentication(token);

    console.log(received_id,'ezaan');
    console.log(user_id,'amin');

    

}