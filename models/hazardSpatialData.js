const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeInstance');

const HazardSpatialData = sequelize.define('HazardSpatialData', {
  hazard_spatial_id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  spatial_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
  },
  hazard_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
  },
  probability_of_occurrence: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  severity_level: {
    type: DataTypes.ENUM('low', 'medium', 'high'),
    allowNull: false,
  },
  mitigation_measure: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  last_assessment_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
}, { tableName: 'hazard_spatial_data', timestamps: false });

module.exports = HazardSpatialData;