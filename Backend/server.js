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

const corsOptions = {
  origin:  "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};




app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

app.use("/api/auth", authRouter);
app.use("/api/data", authRouter);


app.get("/",(req,res)=>{
  res.send("Hello World")
})

app.listen(PORT, () => {
  ConnectDb();
  console.log(`Server running on port ${PORT}`);
});
