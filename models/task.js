const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  sub_title: String,
  time: Date,
  projectId: String,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
