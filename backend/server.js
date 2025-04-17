import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./config/db.js";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Apply middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging

// CORS configuration
const allowedOrigins = [
  'https://quiet-tanuki-af76a9.netlify.app',
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// API Routes
app.use("/api/auth", authRouter);
app.use("/api/data", authRouter);

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Insights Hub API",
    version: "1.0.0",
    status: "online",
    documentation: "/api/docs"
  });
});

// Documentation route (placeholder)
app.get("/api/docs", (req, res) => {
  res.json({
    message: "API Documentation",
    endpoints: {
      auth: {
        signup: { method: "POST", url: "/api/auth/signup" },
        signin: { method: "POST", url: "/api/auth/signin" }
      },
      data: {
        // Add your data endpoints documentation here
      }
    }
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  ConnectDb();
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});


