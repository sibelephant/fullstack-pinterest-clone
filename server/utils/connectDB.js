import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MonogoDB is connected");
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR", error);
  }
};

export default connectDb;
