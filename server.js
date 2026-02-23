import { setServers } from "node:dns/promises";

setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const MONGODB_URL = process.env.MONGO_URI;

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Blog API is running");
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
