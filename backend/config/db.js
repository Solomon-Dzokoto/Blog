import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB connected!");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1)
  }
};
export default ConnectDb;
