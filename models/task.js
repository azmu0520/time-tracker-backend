const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  sub_title: String,
  time: String,
  project_id: String,
  timeSheet: [],
  totalTime: String,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
