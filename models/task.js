const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  sub_title: String,
  time: String,
  timeSheet: [],
  totalTime: String,
  project_id: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
