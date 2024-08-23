import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./mongodb/connect.js";
import cors from "cors";
import postRoutes from "./routes/postRoute.js";
import dalleRoutes from "./routes/dalleRoute.js";
import path from "path";
dotenv.config();

const app = express();

const __dirname = path.resolve();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.get("/", async (req, res) => {
  res.send("Hello from PicGenie");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log(`Server is running on port 8080`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
