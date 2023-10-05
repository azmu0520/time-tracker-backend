const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  sub_title: String,
  time: Date,
});

const Task = mongoose.model("Task", projectSchema);

module.exports = Task;
