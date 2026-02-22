import express, { Request, Response } from "express";
import "dotenv/config";
import mongoose from "moongoose";
import cors from "cors";
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
