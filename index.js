const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const projectRoutes = require("./routes/project");
const taskRoutes = require("./routes/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const uri = process.env.DB;

// MongoDB database
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log("Connection Failed", err?.message));

// Routes here
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
