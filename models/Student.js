import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  studentId: { type: String, required: true, unique: true },
  className: { type: String },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["Sinh viên", "Giảng viên", "Admin"],
    default: "Sinh viên"
  },
  createdAt: { type: Date, default: Date.now }
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
