const nearestFeatureRepository = require('../repositories/nearestFeatureRepository');

class NearestFeatureService {
  async createFeature(featureData) {
    return await nearestFeatureRepository.create(featureData);
  }

  async getAllFeatures() {
    return await nearestFeatureRepository.findAll();
  }

  async getFeatureById(featureId) {
    return await nearestFeatureRepository.findById(featureId);
  }

  async updateFeature(featureId, updatedData) {
    return await nearestFeatureRepository.update(featureId, updatedData);
  }

  async deleteFeature(featureId) {
    return await nearestFeatureRepository.delete(featureId);
  }
}

module.exports = new NearestFeatureService();