import express from "express"
import { GetConverstionID } from "../controllers/Chat.js";






const router=express.Router();

router.post('/Conversation',GetConverstionID);

export default router;