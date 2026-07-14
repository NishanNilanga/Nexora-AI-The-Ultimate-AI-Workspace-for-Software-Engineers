const Project = require("../models/Project");
const Task = require("../models/Task");

const getDashboardStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const projects = await Project.countDocuments({
      owner: userId,
    });

    const tasks = await Task.countDocuments({
      owner: userId,
    });

    const completed = await Task.countDocuments({
      owner: userId,
      status: "completed",
    });

    const pending = await Task.countDocuments({
      owner: userId,
      status: "todo",
    });

    const highPriority = await Task.countDocuments({
      owner: userId,
      priority: "high",
    });

    res.status(200).json({
      success: true,
      stats: {
        projects,
        tasks,
        completed,
        pending,
        highPriority,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};