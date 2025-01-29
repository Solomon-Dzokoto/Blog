import dotenv from "dotenv";
import bcryptjs from "bcryptjs";
import { body, validationResult } from "express-validator";
import { User } from "../../models/User.js";
import generateToken from "../../utils/GenerateCookies.js"

dotenv.config();



export const Signin = [
    body("Email").isEmail().normalizeEmail().withMessage("Invalid Email Format"),
    body("Password")
      .isLength({ min: 6 })
      .withMessage("Password should be min of 6"),
  
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ success: false, errors: errors.array() });
      }
  
      const { Email, Password } = req.body;

      res.setHeader("Access-Control-Allow-Origin", "https://quiet-tanuki-af76a9.netlify.app");
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.setHeader("Access-Control-Allow-Credentials", "true");
    
      // Handle preflight requests
      if (req.method === "OPTIONS") {
        return res.status(204).end();
      }

      if (req.method === "POST") {
        req.body = JSON.parse(req.body);
      }
  
      try {
        if (!Email || !Password) {
          throw new Error("Provide all credentials");
        }
  
        const user = await User.findOne({ Email });
        if (!user) {
          return res
            .status(400)
            .json({ success: false, message: "User does not exist" });
        }
  
        const isMatch = await bcryptjs.compare(Password, user.Password);
        if (!isMatch) {
          return res.status(400).json({
            success: false,
            message: "Invalid password, please try again",
          });
        }
  
        const token = generateToken(res, user._id);
  
        res.status(200).json({
          success: true,
          token: token,
          message: "You have logged in successfully",
          user: {
            id: user._id,
            Email: user.Email,
            Name: user.Name,
            lastLogin: user.lastLogin,
            Password: undefined,
          },
        });
      } catch (error) {
        console.error("Signin error:", error);
        res.status(500).json({
          success: false,
          message: "Server error",
          error: error.message,
        });
      }
    },
  ];