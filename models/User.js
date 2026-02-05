import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  studentId: { type: String },
  email: { type: String, required: true },
  faculty: { type: String },
  role: { type: String, enum: ["Sinh viên", ], default: "Sinh viên" },
});

export default mongoose.model("User", userSchema);
