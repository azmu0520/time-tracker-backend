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

const getTasksById = async (req, res) => {
  const { project_id } = req.params;

  try {
    const tasks = await Task.find({ project_id: project_id });
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const {
      title,
      sub_title,
      time,
      timeSheet,
      totalTime,
      project_id,
      user_id,
    } = req.body;

    const project = await Project.findById(project_id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    const newTask = new Task({
      title,
      sub_title,
      time,
      timeSheet,
      totalTime,
      project_id,
      user_id,
    });
    await newTask.save();

    project.tasks.push(newTask);
    await project.save();
    res.status(201).json({ msg: "Task Successfully created!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const updateTaskTime = async (req, res) => {
  const { task_id, time, sheet } = req.body;
  try {
    await Task.findByIdAndUpdate(
      task_id,
      {
        $push: {
          timeSheet: time,
        },
        $set: {
          totalTime: [...sheet, time].reduce((prev, next) => prev + next, 0),
        },
      },
      { new: true }
    );

    res.status(200).json({ msg: "Task Successfully updated!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllTasks, getTasksById, createTask, updateTaskTime };
