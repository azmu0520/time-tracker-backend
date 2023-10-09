const Project = require("../models/project");
const User = require("../models/user");

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("tasks");
    res.status(200).json({ data: projects });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getSingleProject = async (req, res) => {
  const projectId = req.params.projectId;

  try {
    const projects = await Project.findById(projectId);

    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const createProject = async (req, res) => {
  const { title, sub_title, created_by } = req.body;

  try {
    const user = await User.findById(created_by);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const newProject = new Project({ title, sub_title, created_by });
    await newProject.save();

    res.status(201).json({ msg: "Project Successfully created!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports = { getAllProjects, getSingleProject, createProject };
