import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import { mongoose } from "mongoose";

dotenv.config();

// connect to MongoDB
console.log(process.env.NODE_ENV);
dbConnect();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

mongoose.connection.once("open", () => {
  console.log("MongoDB connection established successfully");
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
});
mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

app.get("/", (req, res) => {
  res.send("Welcome to RateMyStartup Backend!");
});
