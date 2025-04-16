const NearestFeature = require('../models/nearestFeature');

class NearestFeatureRepository {
  async create(featureData) {
    return await NearestFeature.create(featureData);
  }

  async findAll() {
    return await NearestFeature.findAll();
  }

  async findById(featureId) {
    return await NearestFeature.findByPk(featureId);
  }

  async update(featureId, updatedData) {
    await NearestFeature.update(updatedData, { where: { nearest_feature_id: featureId } });
    return this.findById(featureId);
  }

  async delete(featureId) {
    return await NearestFeature.destroy({ where: { nearest_feature_id: featureId } });
  }
}

module.exports = new NearestFeatureRepository();