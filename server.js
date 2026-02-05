import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json());

// ✅ Kết nối MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://admin:orpk0DDYd0XrPaKB@student-management.m8jm0pj.mongodb.net/studentdb";
mongoose.connect(MONGODB_URI)
  .then(() => console.log("✅ Kết nối MongoDB thành công"))
  .catch((err) => console.error("❌ Lỗi MongoDB:", err));

// ✅ API routes
app.use("/api/users", userRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("EduChain Backend đang hoạt động 🚀");
});

// ✅ Lắng nghe server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại cổng ${PORT}`);
});
