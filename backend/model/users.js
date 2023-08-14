import mongoose from "mongoose";

const PendingfriendSchema = new mongoose.Schema({
  
  user_id:mongoose.Types.ObjectId,
  status:String,

});
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    surName: String,
    email: String,
    age: Number,
    password: String,
    gender: String,
    verification: Boolean,
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
    interestsAndQuestions: {
      depression: Boolean,
      anxiety: Boolean,
      bipolar: Boolean,
      ptsd: Boolean,
      ocd: Boolean,
      schizophrenia: Boolean,
      eatingDisorders: Boolean,
      other: Boolean,
      eating_disorders: Boolean,
      copingTechniques: Boolean,
      personalStories: Boolean,
      medication: Boolean,
      reducingStigma: Boolean,
      healthyLifestyle: Boolean,
      spirituality: Boolean,
      otherInterests: Boolean,
      meditation: Boolean,
      creativeActivities: Boolean,
      talkToFriends: Boolean,
      exercise: Boolean,
      seekingHelp: Boolean,
      otherCoping: Boolean,
      creative_activities: Boolean,
      talking_to_friends_family: Boolean,
      exercising: Boolean,
      professional_help: Boolean,
      copingother: Boolean,
      coping_techniques: Boolean,
      personal_stories: Boolean,
      reducing_stigma: Boolean,
      healthy_lifestyle: Boolean
    },
    friend: Number,
    pendingFriends: [PendingfriendSchema]
  },
  { timestamps: true }
);
 export const Users = mongoose.model('User', userSchema);

