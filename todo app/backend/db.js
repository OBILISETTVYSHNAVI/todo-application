const mongoose = require('mongoose');

// Replace this with your MongoDB URI (local or from MongoDB Atlas)
const uri = 'mongodb://localhost:27017/todo-app'; // Example for local MongoDB
// For MongoDB Atlas, the URI looks like:
// const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if there's an error
  }
};

module.exports = connectDB;
