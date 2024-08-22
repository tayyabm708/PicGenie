import express from "express";
import * as dotenv from "dotenv";
import { generateAIImage } from "../controllers/dalle.controller.js";
dotenv.config();
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from Dalle");
});

router.post("/generate", generateAIImage)
export default router;
  