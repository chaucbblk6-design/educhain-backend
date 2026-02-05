import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// 📦 GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ➕ POST create new student
router.post("/", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✏️ PUT update student
router.put("/:id", async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Không tìm thấy sinh viên" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 🗑️ DELETE student
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa sinh viên" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
