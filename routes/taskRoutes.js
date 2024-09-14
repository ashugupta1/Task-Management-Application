// backend/routes/taskRoutes.js
const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new task
router.post("/", async (req, res) => {
  const { title, description, dueDate, category } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const task = new Task({ title, description, dueDate, category });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a task
router.patch("/:id", async (req, res) => {
  const { title, description, isCompleted, dueDate, category } = req.body;
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (title) task.title = title;
    if (description) task.description = description;
    if (isCompleted !== undefined) task.isCompleted = isCompleted;
    if (dueDate) task.dueDate = dueDate;
    if (category) task.category = category;

    const updatedTask = await task.save();
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }
    res.status(200).send({ message: "Task deleted" });
  } catch (error) {
    res.status(500).send({ message: "Failed to delete task" });
  }
});

module.exports = router;
