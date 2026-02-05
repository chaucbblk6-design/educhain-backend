import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  studentId: { type: String, required: true },
  className: { type: String },
  email: { type: String, required: true },
  role: { type: String, default: "Sinh viên" }
});

export default mongoose.model("Student", studentSchema);
