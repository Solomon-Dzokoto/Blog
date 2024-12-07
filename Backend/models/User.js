import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  lastLogin:{
    type:Date,
    default:Date.now
  },
  verificationToken:String,
  verificationTokenExpired:Date,
});

export const User = mongoose.model("User",userSchema)
