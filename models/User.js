import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },   // Họ tên
  userId: { type: String, required: true, unique: true }, // Mã sinh viên hoặc giảng viên
  email: { type: String, required: true, unique: true },
  faculty: { type: String }, // Khoa hoặc đơn vị
  role: { type: String, enum: ["Sinh viên", "Giảng viên", "Admin"], default: "Sinh viên" },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
