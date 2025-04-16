const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeInstance');

const UtilitySpatialData = sequelize.define('UtilitySpatialData', {
  utility_spatial_id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  spatial_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
  },
  utility_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
  },
  utility_type_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
  },
  accessibility: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
}, { tableName: 'utility_spatial_data', timestamps: false });

module.exports = UtilitySpatialData;