const express = require('express');
const connectDB = require('./db'); // Import the database connection
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable cross-origin requests

// Connect to MongoDB
connectDB();

// Import the routes once
const todoRoutes = require('./routes/todoRoutes');

// Use the routes for /api/todos
app.use('/api/todos', todoRoutes);

// Define a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Todo App');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
