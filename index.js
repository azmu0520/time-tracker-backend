const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

// enable cors
app.use(cors({ origin: "*" }));

// env config
dotenv.config();

// MongoDB database
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log("Connection Failed", err?.message));

// Set Port
const port = process.env.PORT || 5050;
const uri = process.env.DB;

// Middleware
app.use(express.json());

app.use(bodyParser.json());

// Routes here

const projectRoutes = require("./routes/project");
const taskRoutes = require("./routes/task");

// Route Middlewares

app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
