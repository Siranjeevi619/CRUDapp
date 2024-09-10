// Import mongoose and dotenv
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Define a function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("DB connected");
    console.log("Hello hero");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
