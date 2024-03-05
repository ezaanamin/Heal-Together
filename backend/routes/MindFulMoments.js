import express from "express"
import { GetCommentsMindFulMoments, GetUsersMindFulDetails,SupportMindFulMoments } from "../controllers/MindFulMoments.js";


const router=express.Router();

router.post('/get',GetUsersMindFulDetails)
router.post("/support",SupportMindFulMoments)
router.post('/getMindfulMomentComments',GetCommentsMindFulMoments);

export default router;