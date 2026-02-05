import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Kết nối MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Đã kết nối MongoDB thành công"))
.catch((err) => console.error("❌ Lỗi kết nối MongoDB:", err));

// ✅ Routes
app.use("/api/students", studentRoutes);

// ✅ Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server chạy tại cổng ${PORT}`));
