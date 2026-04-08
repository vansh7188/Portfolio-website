import mongoose from "mongoose";

export async function connectDB(mongodbUri) {
  if (!mongodbUri) {
    return;
  }

  try {
    await mongoose.connect(mongodbUri, {
      serverSelectionTimeoutMS: 3000
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.warn("MongoDB connection skipped:", error.message);
  }
}
