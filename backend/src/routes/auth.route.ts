import express from "express"
import dotenv from "dotenv"

import { 
      checkAuth, 
      signin,
      signout,
      signup,
      updateProfile,
     } from "../controller/auth.controller"

import { verifyToken } from "../middleware/verifytoken"

const router  = express.Router()
dotenv.config()

router.get('/checkAuth',verifyToken,checkAuth)


router.post('/signup',signup)


router.post('/signin',signin)


router.post('/signout',signout)



router.post('/updateProfile',verifyToken,updateProfile)

export default router