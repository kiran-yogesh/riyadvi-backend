require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 5000;

// Initialize Database connection
connectDB();

app.listen(PORT, () => {
  console.log(`[Riyadvi Backend] Server running on http://localhost:${PORT}`);
});
