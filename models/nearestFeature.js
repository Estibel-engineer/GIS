const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeInstance');

const NearestFeature = sequelize.define('NearestFeature', {
  nearest_feature_id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  feature_name: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
}, { tableName: 'nearest_feature', timestamps: false });

module.exports = NearestFeature;