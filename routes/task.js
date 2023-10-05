const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getSingleTask,
  createTask,
} = require("../controllers/task");

router.get("/", getAllTasks);
router.get("/:projectId", getSingleTask);
router.post("/", createTask);

module.exports = router;
