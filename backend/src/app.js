import cors from "cors";
import express from "express";
import healthRoutes from "./routes/healthRoutes.js";
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

export default app;
