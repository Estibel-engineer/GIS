// backend/src/config/associations.js
const Document = require('../models/Document'); // Adjust the path as necessary
const Tag = require('../models/Tags');
const DocumentTags = require('../models/DocumentTags');
const Documentcategories = require('../models/Documentcategories');
const DocumentComments = require('../models/DocumentsComments');
const DocumentShares = require('../models/DocumentShares');
const DocumentVersions = require('../models/DocumentVersions');
const Letter = require('../models/Letter'); // Adjust the path as necessary 
const Annex = require('../models/Annex'); // Adjust the path as necessary   
const Hazard = require('../models/hazard');
const HazardSpatialData = require('../models/hazardSpatialData');
const NearestFeature = require('../models/nearestFeature');
const NearestSpatialData = require('../models/nearestSpatialData');
const SpatialData = require('../models/spatialData');
const Utility = require('../models/utility');
const UtilitySpatialData = require('../models/utilitySpatialData');
const UtilityType = require('../models/utilityType');

// Define associations
Document.belongsToMany(Tag, { through: DocumentTags, foreignKey: 'document_id' });
Tag.belongsToMany(Document, { through: DocumentTags, foreignKey: 'tag_id' });
Document.belongsTo(Documentcategories, { foreignKey: 'category_id', as: 'category', });
// One-to-Many association between Document and DocumentComments
Document.hasMany(DocumentComments, { foreignKey: 'document_id', as: 'comments' });
DocumentComments.belongsTo(Document, { foreignKey: 'document_id' });
// Example associations for DocumentShares and DocumentVersions
Document.hasMany(DocumentShares, { foreignKey: 'document_id', as: 'sharedUsers' });
Document.hasMany(DocumentVersions, { foreignKey: 'document_id', as: 'versions' });
// Define the association between letter and annex documents
Letter.hasMany(Annex, { foreignKey: 'letter_id' });
Annex.belongsTo(Letter, { foreignKey: 'letter_id' });

// Define associations
// Hazard has many HazardSpatialData
Hazard.hasMany(HazardSpatialData, {
    foreignKey: 'hazard_id',
    sourceKey: 'hazard_id',
  });
  
  // HazardSpatialData belongs to Hazard and SpatialData
  HazardSpatialData.belongsTo(Hazard, {
    foreignKey: 'hazard_id',
    targetKey: 'hazard_id',
  });
  HazardSpatialData.belongsTo(SpatialData, {
    foreignKey: 'spatial_id',
    targetKey: 'spatial_id',
  });
  
  // NearestFeature has many NearestSpatialData
  NearestFeature.hasMany(NearestSpatialData, {
    foreignKey: 'nearest_feature_id',
    sourceKey: 'nearest_feature_id',
  });
  
  // NearestSpatialData belongs to NearestFeature and SpatialData
  NearestSpatialData.belongsTo(NearestFeature, {
    foreignKey: 'nearest_feature_id',
    targetKey: 'nearest_feature_id',
  });
  NearestSpatialData.belongsTo(SpatialData, {
    foreignKey: 'spatial_data_id',
    targetKey: 'spatial_id',
  });
  
  // Utility has many UtilitySpatialData
  Utility.hasMany(UtilitySpatialData, {
    foreignKey: 'utility_id',
    sourceKey: 'utility_id',
  });
  
  // UtilitySpatialData belongs to Utility, SpatialData, and UtilityType
  UtilitySpatialData.belongsTo(Utility, {
    foreignKey: 'utility_id',
    targetKey: 'utility_id',
  });
  UtilitySpatialData.belongsTo(SpatialData, {
    foreignKey: 'spatial_id',
    targetKey: 'spatial_id',
  });
  UtilitySpatialData.belongsTo(UtilityType, {
    foreignKey: 'utility_type_id',
    targetKey: 'utility_type_id',
  });
  
  // UtilityType belongs to Utility
  UtilityType.belongsTo(Utility, {
    foreignKey: 'utility_id',
    targetKey: 'utility_id',
  });
