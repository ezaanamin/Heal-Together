import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema(
  {
    Mindful_Moments: String,
    user_id: mongoose.Schema.Types.ObjectId,
    Date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts", PostsSchema);
export default Posts;