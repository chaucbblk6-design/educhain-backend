import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  studentId: { type: String, required: true },
  className: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: ["Sinh viên", "Giảng viên"], default: "Sinh viên" },
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);
export default Student;
