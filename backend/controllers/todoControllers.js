// controllers/taskController.js
const Task = require('../models/todoModels');

// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);  // Return the created task
  } catch (error) {
    console.error('Error creating task:', error);  // Log the error for debugging
    res.status(400).json({ message: 'Error creating task', error });
  }
};


// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching tasks', error });
  }
};

// Update task status (completed or not)
const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { completed },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: 'Error updating task', error });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.findByIdAndDelete(taskId);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting task', error });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
