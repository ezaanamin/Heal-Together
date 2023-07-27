import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema(
  {
    
 
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts",  PostsSchema);
export default Posts;