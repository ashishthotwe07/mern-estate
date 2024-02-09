import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to monogo");
  })
  .catch(() => {
    console.log("error connecting mongo");
  });
const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
