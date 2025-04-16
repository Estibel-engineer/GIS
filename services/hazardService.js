const hazardRepository = require('../repositories/hazardRepository');

class HazardService {
  async createHazard(hazardData) {
    return await hazardRepository.create(hazardData);
  }

  async getAllHazards() {
    return await hazardRepository.findAll();
  }

  async getHazardById(hazardId) {
    return await hazardRepository.findById(hazardId);
  }

  async updateHazard(hazardId, updatedData) {
    return await hazardRepository.update(hazardId, updatedData);
  }

  async deleteHazard(hazardId) {
    return await hazardRepository.delete(hazardId);
  }
}

module.exports = new HazardService();