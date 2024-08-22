import express from "express";

import { generateAIImage } from "../controllers/dalle.controller.js";

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from Dalle");
});

router.post("/generate", generateAIImage)
export default router;
  