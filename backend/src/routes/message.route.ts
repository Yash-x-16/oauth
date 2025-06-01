import express from "express" 
import { verifyToken } from "../middleware/verifytoken"
import { getMessages, getUsers } from "../controller/message.controller"

const router = express.Router()

router.get('/users',verifyToken,getUsers)
router.get('/:id',verifyToken,getMessages)
router.post('/send/:id',verifyToken)

export default router