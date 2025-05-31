import express from "express"
import dotenv from "dotenv"
import { 
      checkAuth, 
      forgotPassword,
      resetPassword,
      signin,
      signout,
      signup,
      verifyEmail } from "../controller/auth.controller"

import { verifyToken } from "../middleware/verifytoken"

const router  = express.Router()
dotenv.config()

router.get('/checkAuth',verifyToken,checkAuth)

router.post('/signup',signup)


router.post('/signin',signin)


router.post('/signout',signout)

router.post('/verifyEmail',verifyEmail)

router.post('/forgotPassword',forgotPassword)
router.post('/resetPassword:token',resetPassword)
export default router