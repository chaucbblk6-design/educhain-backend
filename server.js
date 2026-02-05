import express from "express";
import Teacher from "../models/Teacher.js";

const router = express.Router();

// 🟢 Lấy danh sách giảng viên
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🟢 Thêm giảng viên mới
router.post("/", async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 🟡 Cập nhật thông tin giảng viên
router.put("/:id", async (req, res) => {
  try {
    const updated = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Không tìm thấy giảng viên" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 🔴 Xóa giảng viên
router.delete("/:id", async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa giảng viên" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
