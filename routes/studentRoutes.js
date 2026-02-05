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
    const { fullName, studentId, className, email, role } = req.body;
const newStudent = new Student({
  name: fullName, // ánh xạ đúng field trong MongoDB
  studentId,
  className,
  email,
  role
});

    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    console.error("❌ Lỗi thêm sinh viên:", err);
    res.status(500).json({ message: "Không thể thêm sinh viên" });
  }
});

// ✏️ Cập nhật thông tin sinh viên
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, {
      new: true,          // trả về bản ghi sau khi update
      runValidators: true // đảm bảo validate model
    });
    if (!updatedStudent) {
      return res.status(404).json({ message: "Không tìm thấy sinh viên" });
    }
    res.json(updatedStudent);
  } catch (err) {
    console.error("❌ Lỗi cập nhật sinh viên:", err);
    res.status(500).json({ message: "Không thể cập nhật sinh viên" });
  }
});

// 🗑️ Xóa sinh viên
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Không tìm thấy sinh viên" });
    res.json({ message: "Đã xóa sinh viên" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
