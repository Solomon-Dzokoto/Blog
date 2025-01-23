import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Ensure email is stored in lowercase
      trim: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    verificationToken: {
      type: String,
      required: false,
    },
    verificationTokenExpiresAt: {
      type: Date,
      required: false,
    },
    credentials: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Credential", // Link to the Credential model
      },
    ],
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` automatically
  }
);

export const User = mongoose.model("User", userSchema);
