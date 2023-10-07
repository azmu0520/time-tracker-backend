const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTasksById,
  createTask,
  updateTaskTime,
} = require("../controllers/task");

router.get("/", getAllTasks);
router.get("/:project_id", getTasksById);
router.post("/", createTask);
router.post("/update", updateTaskTime);

module.exports = router;
