 "use server"
import mongoose from "mongoose";
import dotenv from  "dotenv"

dotenv.config()

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState ===1){
            console.log("MongoDb is already connected")
            return;
        }
        await mongoose.connect(import.meta.env.MONGODB_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as any); 
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

export default connectDB;  