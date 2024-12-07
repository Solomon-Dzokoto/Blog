import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./config/db.js";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json());

const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(cors(corsOption));

app.use("/api/auth", authRouter);

app.get("/",(req,res)=>{
  res.send("Hello World")
})

app.listen(PORT, () => {
  ConnectDb();
  console.log(`Server running on port ${PORT}`);
});
