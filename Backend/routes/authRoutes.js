import express from "express"
import { Signup } from "../api/auth/signup.js"
import { Signin } from "../api/auth/signup.js"
const router=express.Router()


router.post('/signup',Signup)
router.post('/signin',Signin)

export default router