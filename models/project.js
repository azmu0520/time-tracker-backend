const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  sub_title: String,
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
