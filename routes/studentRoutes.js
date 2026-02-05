import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// 📦 Lấy toàn bộ sinh viên
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ➕ Thêm sinh viên mới
router.post("/", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    console.error("Lỗi thêm sinh viên:", err);
    res.status(500).json({ message: "Không thể thêm sinh viên" });
  }
});

// 🗑️ Xóa sinh viên
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa sinh viên" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
