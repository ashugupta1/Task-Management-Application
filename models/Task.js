// models/Task.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  dueDate: { type: Date, required: false }, // New field for due dates
  category: { type: String, required: false }, // New field for task categorization
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
