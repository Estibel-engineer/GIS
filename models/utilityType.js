const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeInstance');

const UtilityType = sequelize.define('UtilityType', {
  utility_type_id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  utility_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
}, { tableName: 'utility_type', timestamps: false });

module.exports = UtilityType;