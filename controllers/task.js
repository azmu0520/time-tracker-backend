const task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await task.find();

    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getSingleTask = async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const tasks = await task.findById(taskId);

    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  const { title, sub_title } = req.body;

  try {
    const newTask = new task({ title, sub_title });
    await newTask.save();

    res.status(201).json({ msg: "Task Successfully created!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports = { getAllTasks, getSingleTask, createTask };
