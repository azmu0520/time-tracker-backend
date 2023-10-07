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
  const { project_id } = req.body;
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    await Project.findByIdAndUpdate(
      { _id: project_id },
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

const updateTaskTime = async (req, res) => {
  const { task_id } = req.body;
  try {
    await Task.findByIdAndUpdate(
      task_id,
      {
        $set: {
          time: "asda",
        },
      },
      { new: true }
    );
    res.status(200).json({ msg: "Task Successfully updated!" });
  } catch (error) {}
};

module.exports = { getAllTasks, getSingleTask, createTask, updateTaskTime };
