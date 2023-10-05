const Task = require("../models/task");
const Project = require("../models/project");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getSingleTask = async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const tasks = await Task.findById(taskId);

    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  const { projectId } = req.body;
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    let selectedProject = await Project.findByIdAndUpdate(
      { _id: projectId },
      {
        $push: { tasks: newTask },
      },
      { new: true }
    );
    res.status(201).json({ msg: "Task Successfully created!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports = { getAllTasks, getSingleTask, createTask };
