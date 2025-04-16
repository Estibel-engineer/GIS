const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Insa!2025',
  database: process.env.DB_NAME || 'cris_gis',
  port: process.env.DB_PORT || 3306,
  logging: false,
  define: { timestamps: false, underscored: true }
});

module.exports = sequelize;