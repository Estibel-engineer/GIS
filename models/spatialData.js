const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeInstance');

const SpatialData = sequelize.define('SpatialData', {
  spatial_id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  project_id: {
    type: DataTypes.CHAR(36),
    allowNull: true,
  },
  registered_by: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  registration_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, { tableName: 'spatial_data', timestamps: false });

module.exports = SpatialData;