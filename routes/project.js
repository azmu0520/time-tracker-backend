const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  getSingleProject,
  createProject,
} = require("../controllers/project");

router.get("/", getAllProjects);
router.get("/:projectId", getSingleProject);
router.post("/", createProject);

module.exports = router;
