import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// 📚 Lấy toàn bộ danh sách môn học
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ➕ Thêm môn học mới
router.post("/", async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    console.error("❌ Lỗi thêm môn học:", err);
    res.status(400).json({ message: err.message });
  }
});

// ✏️ Cập nhật môn học
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Course.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ message: "Không tìm thấy môn học" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 🗑️ Xóa môn học
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Không tìm thấy môn học" });
    res.json({ message: "Đã xóa môn học" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
