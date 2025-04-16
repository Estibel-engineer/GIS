const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeInstance'); // Adjust the path as needed

const Hazard = sequelize.define('Hazard', {
  hazard_id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  hazard_name: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
}, { tableName: 'hazard', timestamps: false });

module.exports = Hazard;