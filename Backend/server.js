import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./config/db.js";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://quiet-tanuki-af76a9.netlify.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  
  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  
  next();
});

app.use("/api/auth", authRouter);
app.use("/api/data", authRouter);


app.get("/",(req,res)=>{
  res.send("Hello World")
})

app.listen(PORT, () => {
  ConnectDb();
  console.log(`Server running on port ${PORT}`);
});


