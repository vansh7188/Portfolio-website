import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 5000,
  mongodbUri:
    process.env.MONGO_URI ||
    process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/vansh_portfolio",
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173"
};
