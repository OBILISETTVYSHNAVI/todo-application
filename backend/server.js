const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/todoRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json()); // To parse JSON body
app.use(cors()); // Enable cross-origin requests

// Routes
app.use('/api', taskRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
