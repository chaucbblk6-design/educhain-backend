import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Create
router.post("/", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
});

// Update
router.put("/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

export default router;
