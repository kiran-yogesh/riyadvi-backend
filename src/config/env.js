require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/riyadvi_db',
  JWT_SECRET: process.env.JWT_SECRET || 'riyadvi_jwt_super_secret_key_2026_tech_partner',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
  ADMIN_NAME: process.env.ADMIN_NAME || 'Riyadvi Super Admin',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'admin@riyadvisoftwaretechnologies.com',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'admin123'
};
