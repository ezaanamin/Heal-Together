import express from "express"
import { GetUsersMindFulDetails,SupportMindFulMoments } from "../controllers/MindFulMoments.js";


const router=express.Router();

router.post('/get',GetUsersMindFulDetails)
router.post("/support",SupportMindFulMoments)

export default router;