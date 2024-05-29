import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
{
    members:{
        type:Array,
        require:true
    }


},
{ timestamps: true }

)

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation