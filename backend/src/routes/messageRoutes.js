import { Router } from "express";
import Message from "../models/Message.js";

const router = Router();

router.post("/", async (request, response) => {
  const { name, email, message } = request.body || {};

  if (!name || !email || !message) {
    return response.status(400).json({
      ok: false,
      message: "Name, email, and message are required."
    });
  }

  try {
    const doc = await Message.create({ name, email, message });

    return response.status(201).json({
      ok: true,
      id: doc._id,
      message: "Message saved successfully."
    });
  } catch (error) {
    return response.status(500).json({
      ok: false,
      message: "Failed to save message.",
      error: error.message
    });
  }
});

export default router;