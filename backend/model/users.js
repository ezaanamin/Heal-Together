import mongoose from "mongoose";

const PendingfriendSchema = new mongoose.Schema({
  
  user_id:mongoose.Types.ObjectId,
  status:String,

});


const UsersSchema = new mongoose.Schema(
  {
    firstName:String,
    SurName:String,
    dateOfBirth:Date,
    email:String,
    age:Number,
    password:String,
    Gender:String,
    verification:Boolean,
    userProfile:String,
    friend:Number,
    pendingFriends:[PendingfriendSchema]
    
  },
  { timestamps: true }
);

const Users = mongoose.model("Users",  UsersSchema);
export default Users;