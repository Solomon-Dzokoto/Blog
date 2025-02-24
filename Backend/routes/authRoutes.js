import express from "express"
import { Signin } from "../another/login.js"
import { Signup }from "../another/signup.js"
const router=express.Router()


router.post('/signup',Signup)
router.post('/signin',Signin)

export default router