import express from "express"
import { forgotPassword, signin,signout,signup,verifyEmail } from "../controller/auth.controller"
const router  = express.Router()


router.post('/signup',signup)


router.post('/signin',signin)


router.post('/signout',signout)

router.post('/verifyEmail',verifyEmail)

router.post('/forgotPassword',forgotPassword)
export default router