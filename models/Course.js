import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  credits: { type: Number, required: true },
  lecturer: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
