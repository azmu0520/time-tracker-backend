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
    const newTask = new Task(req.body);
    await newTask.save();
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
