import mongoose from "mongoose";
import { seedDoctors } from "./seedDoctors.js";

const connectDB = async () => {
  const tryConnect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB Connected Successfully");
      await seedDoctors();
    } catch (error) {
      console.error("MongoDB connection error:", error.message);
      console.log("Retrying MongoDB connection in 5 seconds...");
      setTimeout(tryConnect, 5000);
    }
  };
  await tryConnect();
};

export default connectDB;
