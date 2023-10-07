const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  sub_title: String,
  time: String,
  projectId: String,
  timeSheet: [],
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
