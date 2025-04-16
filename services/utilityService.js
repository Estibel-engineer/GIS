const utilityRepository = require('../repositories/utilityRepository');

class UtilityService {
  async createUtility(utilityData) {
    return await utilityRepository.create(utilityData);
  }

  async getAllUtilities() {
    return await utilityRepository.findAll();
  }

  async getUtilityById(utilityId) {
    return await utilityRepository.findById(utilityId);
  }

  async updateUtility(utilityId, updatedData) {
    return await utilityRepository.update(utilityId, updatedData);
  }

  async deleteUtility(utilityId) {
    return await utilityRepository.delete(utilityId);
  }
}

module.exports = new UtilityService();