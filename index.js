const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "*" }));
const port = process.env.PORT || 5050;
app.use(bodyParser.json());

const uri = process.env.DB;
app.use(express.json());
// MongoDB database
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log("Connection Failed", err?.message));

// Routes here
const projectRoutes = require("./routes/project");
const taskRoutes = require("./routes/task");

app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
