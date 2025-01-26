import dotenv from "dotenv";
import bcryptjs from "bcryptjs";
import { body, validationResult } from "express-validator";
import { User } from "../models/User.js";
import generateToken from "../utils/GenerateCookies.js";

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
