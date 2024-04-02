import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import ListingRouter from "./routes/listing.routes.js";
import path from "path";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to monogo");
  })
  .catch(() => {
    console.log("error connecting mongo");
  });

const __dirname = path.resolve();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRouter);
app.use("/api/listing", ListingRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
