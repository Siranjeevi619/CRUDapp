import mongoose from "mongoose";
import dotEnv from "dotenv";

dotEnv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("db connected");
    console.log("hello hero");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
