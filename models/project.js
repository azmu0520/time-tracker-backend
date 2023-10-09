const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
