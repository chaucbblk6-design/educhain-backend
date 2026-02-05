import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userId: { type: String, required: true, unique: true }, // Dùng chung cho mã SV hoặc mã GV
  className: { type: String }, // Sinh viên thì là lớp, giảng viên có thể để null
  email: { type: String, required: true, unique: true },
  role: { 
    type: String, 
    enum: ["Sinh viên", "Giảng viên", "Admin"], 
    default: "Sinh viên" 
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
