const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  sub_title: String,
  tasks: [],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
