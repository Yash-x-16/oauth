import express from "express"
import { signin,signout,signup } from "../controller/auth.controller"
const router  = express.Router()


router.post('/signup',signup)


router.get('/signin',signin)


router.get('/signout',signout)


export default router