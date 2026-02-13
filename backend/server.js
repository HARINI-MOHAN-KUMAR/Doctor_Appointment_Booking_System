import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// database & cloudinary
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://YOUR-ADMIN-FRONTEND.vercel.app" // 🔴 replace after admin deploy
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// api routes
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

// health check
app.get("/", (req, res) => {
  res.send("API Working");
});

// server
app.listen(port, () => {
  console.log(`Server started on PORT:${port}`);
});
