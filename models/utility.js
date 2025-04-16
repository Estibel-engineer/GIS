const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeInstance');

const Utility = sequelize.define('Utility', {
  utility_id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  utility_name: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
}, { tableName: 'utility', timestamps: false });

module.exports = Utility;