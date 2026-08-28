import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connection } from "./database/db.js";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    message: "Auth API is running",
  });
});

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening at port ${process.env.PORT}`);
    connection();
});
