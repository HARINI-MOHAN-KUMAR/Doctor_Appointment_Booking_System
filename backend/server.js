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

// Build allowed origins from environment variables
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:5174",
];
if (process.env.FRONTEND_URL) allowedOrigins.push(process.env.FRONTEND_URL);
if (process.env.ADMIN_URL) allowedOrigins.push(process.env.ADMIN_URL);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith('.vercel.app') ||
        origin.includes('localhost')
      ) {
        return callback(null, true);
      }
      return callback(null, true);
    },
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

export default app;
