const mongoose = require('mongoose');
const { MONGODB_URI } = require('./env');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.warn(`[MongoDB Warning] Database connection deferred/failed: ${error.message}`);
    console.warn(`[MongoDB Info] Express backend operating with fallback in-memory store for API evaluation.`);
  }
};

module.exports = connectDB;
