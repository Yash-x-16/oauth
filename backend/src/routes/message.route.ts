import express from "express" 
import { verifyToken } from "../middleware/verifytoken"


const router = express.Router()

router.get('/users',verifyToken,)

export default router