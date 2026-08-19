import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import dotenv from "dotenv";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// DB connection
connectDB();

// Middlewares
app.use(express.json({ limit: "10mb" }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(cookieParser());

// API ENDPOINTS
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`server is running on PORT ${PORT}`);
});