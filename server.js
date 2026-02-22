import express, {Request, Response} from 'express';
import "dotenv/config";
import mongoose from "moongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))

app.listen(7000, () => {
    console.log("Server running on localhost:7000");
});
