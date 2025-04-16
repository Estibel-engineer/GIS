const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeInstance');

const NearestSpatialData = sequelize.define('NearestSpatialData', {
  nearest_spatial_id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  spatial_data_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
  },
  nearest_feature_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
  },
  compass_direction: {
    type: DataTypes.ENUM('north', 'south', 'east', 'west', 'not specified'),
    allowNull: false,
  },
  distance_in_m: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, { tableName: 'nearest_spatial_data', timestamps: false });

module.exports = NearestSpatialData;