import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

// ✅ Cho phép frontend kết nối từ bất kỳ nguồn nào
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

mongoose.connect("mongodb+srv://admin:orpk0DDYd0XrPaKB@student-management.m8jm0pj.mongodb.net/?appName=student-management")
  .then(() => console.log("✅ Kết nối MongoDB thành công"))
  .catch((err) => console.error("❌ Lỗi kết nối MongoDB:", err));

app.use("/api/students", studentRoutes);

app.get("/", (req, res) => res.send("EduChain Backend hoạt động 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server chạy tại cổng ${PORT}`));
