import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema(
  {
    Comments: String,
    user_id:String,
    Mindful_Moments_id: String

  },
  { timestamps: true }
);

const Comments = mongoose.model("Comments", CommentsSchema);
export default Comments;