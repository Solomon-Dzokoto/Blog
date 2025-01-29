import express from "express"
import { Signin } from "../controllers/authController.js"
import { Signup } from "../api/auth/signup.js"
const router=express.Router()


router.post('/signup',Signup)
router.post('/signin',Signin)

export default router