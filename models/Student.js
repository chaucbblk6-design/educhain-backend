import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  teacherId: { type: String, required: true, unique: true },
  department: { type: String }, // ví dụ: CNTT, Toán, Vật lý
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "Giảng viên" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Teacher", teacherSchema);
