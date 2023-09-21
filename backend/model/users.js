import mongoose from "mongoose";

const PendingSupportSchema = new mongoose.Schema({
  
  user_id:mongoose.Types.ObjectId,
  status:String,

});
const UsersSchema = new mongoose.Schema(
  {
    firstName: String,
    surName: String,
    email: String,
    age: Number,
    username:String,
    password: String,
    gender: String,
    verification: Boolean,
    user_profile_pic:String,
    user_cover_pic:String,
    userStory:String,
    userProfile: {
      primary_motivation: String,
      professional_treatment: String,
      comfortable_discussing_mental_health: String,
      connect_with_others: String,
      religious: String,
      received_a_diagnosis: String,
      age: Number,
      gender_identity: String,
      sexual_orientation: String,
      religious_identity: String
    },
    Mental_Health_Insight:{
      depression: Boolean,
      anxiety: Boolean,
      bipolar: Boolean,
      ptsd: Boolean,
      ocd: Boolean,
      schizophrenia: Boolean,
      eatingDisorders: Boolean,
      other: Boolean,


    },
    Coping:{
      meditation: Boolean,
      creativeActivities: Boolean,
      talking_to_friends_family: Boolean,
      exercising: Boolean,
      professional_help: Boolean,
      copingother: Boolean,
      creative_activities: Boolean
  


    },
    Interests: {
   
      copingTechniques:Boolean ,
      personalStories: Boolean,
      medication: Boolean,
      reducingStigma: Boolean,
      healthyLifestyle: Boolean,
      spirituality: Boolean,
      otherInterests: Boolean,
      coping_techniques: Boolean,
      personal_stories: Boolean,
      healthy_lifestyle:Boolean
  
    },
    SupportGroup: Number,
    pendingSupportGroup: [PendingSupportSchema]
  },
  { timestamps: true }
);
 export const Users = mongoose.model('Users', UsersSchema);

