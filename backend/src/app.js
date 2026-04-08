import cors from "cors";
import express from "express";
import healthRoutes from "./routes/healthRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import { env } from "./config/env.js";

const app = express();

app.use(
  cors({
    origin: env.clientUrl
  })
);
app.use(express.json());

app.get("/", (_request, response) => {
  response.json({
    message: "Vansh Gautam portfolio API is running"
  });
});

app.use("/api/health", healthRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/messages", messageRoutes);

export default app;
