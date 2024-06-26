import express from "express"
import { GetUsersProfile, LoginUser,HashPassword, NewUser, ReSendCode, RecommendedUserProfile, VerfiedUser,VerifyUser, deleteAllNodes, EditProfile, UserFriends, Neo4jTesting, GetUsersInformation, AuthenticateUser } from "../controllers/users.js";

const router=express.Router();
router.post('/',NewUser);
router.post('/send',ReSendCode);
router.post('/verify',VerfiedUser);
router.post('/login',LoginUser);
router.post('/verifyUser',VerifyUser)
router.post('/delete',deleteAllNodes)
router.post('/recommended',RecommendedUserProfile)
router.post('/getUsers',GetUsersProfile)
router.post('/hashpassword',HashPassword)
router.post('/editprofile',EditProfile)
router.post('/userfriend',UserFriends)
router.post('/test',Neo4jTesting);
router.post('/information',GetUsersInformation)
router.post('/Authenticate',AuthenticateUser)

export default router;