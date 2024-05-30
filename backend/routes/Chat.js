import express from "express"
import { GetConverstionID,GetChat } from "../controllers/Chat.js";






const router=express.Router();

router.post('/Conversation',GetConverstionID);
router.post('/getchat',GetChat)
export default router;