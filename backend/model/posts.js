import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema(
  {
    Post_Name:String,
    user_id: mongoose.Schema.Types.ObjectId,
    
 
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts",  PostsSchema);
export default Posts;