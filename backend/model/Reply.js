import mongoose from "mongoose";

const ReplySchema = new mongoose.Schema(
  {
    Reply: String,
    user_id:String,
    comment_id: String

  },
  { timestamps: true }
);

const Reply = mongoose.model("Reply", ReplySchema);
export default Reply;