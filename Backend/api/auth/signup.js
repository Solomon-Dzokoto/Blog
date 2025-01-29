import dotenv from "dotenv";
import bcryptjs from "bcryptjs";
import { body, validationResult } from "express-validator";
import { User } from "../../models/User.js";
import generateToken from "../../utils/GenerateCookies.js"

dotenv.config();

export const Signup = [
    body("Email").isEmail().normalizeEmail().withMessage("Invalid Email Format"),
    body("Password")
      .isLength({ min: 6 })
      .withMessage("Password should be min of 6"),
    body("Name").trim().notEmpty().withMessage("Name is required"),
  
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ success: false, errors: errors.array() });
      }

      res.setHeader('Access-Control-Allow-Origin', 'https://stalwart-tartufo-733b56.netlify.app');
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS,GET');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  if (req.method === "POST") {
    req.body = JSON.parse(req.body);
  }
  
      const { Password, Email, Name } = req.body;
  
      try {
        if (!Password || !Email || !Name) {
          throw new Error("All credentials needed");
        }
  
        if (!Email || !Email.trim()) {
          return res
            .status(400)
            .json({ success: false, message: "Input Correct Email" });
        }
  
        const userAlreadyExist = await User.findOne({ Email });
        if (userAlreadyExist) {
          return res
            .status(400)
            .json({ success: false, message: "User already exists" });
        }
  
        const hashedPassword = await bcryptjs.hash(Password, 10);
  
        const verificationDate = Date.now() + 24 * 60 * 60 * 1000;
  
        const user = new User({
          Email,
          Password: hashedPassword,
          Name,
          verificationDate,
        });
  
        await user.save();
  
        const token = generateToken(res, user._id);
  
        res.status(201).json({
          success: true,
          message: "User created successfully",
          token: token,
          user: {
            id: user._id,
            Email: user.Email,
            Name: user.Name,
            verificationDate: user.verificationDate,
            Password: undefined,
          },
        });
      } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({
          success: false,
          message: "Server error",
          error: error.message,
        });
      }
    },
  ];