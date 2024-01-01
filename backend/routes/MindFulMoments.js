import express from "express"
import { GetUsersMindFulDetails } from "../controllers/MindFulMoments.js";


const router=express.Router();

router.post('/get',GetUsersMindFulDetails)

export default router;