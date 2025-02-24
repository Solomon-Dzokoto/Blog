 "use server"
import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(import.meta.env.MONGODB_URL as string);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

export default connectDB;  