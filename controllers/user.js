const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(201)
      .json({ token: newUser._id, msg: "User Successfully created!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { createUser };
