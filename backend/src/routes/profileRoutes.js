import { Router } from "express";
import { profile } from "../data/portfolio.js";

const router = Router();

router.get("/", (_request, response) => {
  response.json(profile);
});

export default router;
