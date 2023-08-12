import express from "express"
import { LoginUser, NewUser, ReSendCode, VerfiedUser,VerifyUser, deleteAllNodes } from "../controllers/users.js";

const router=express.Router();
router.post('/',NewUser);
router.post('/send',ReSendCode);
router.post('/verify',VerfiedUser);
router.post('/login',LoginUser);
router.get('/verifyUser',VerifyUser)
router.post('/delete',deleteAllNodes)

export default router;