const utilityTypeRepository = require('../repositories/utilityTypeRepository');

class UtilityTypeService {
  async createUtilityType(utilityTypeData) {
    return await utilityTypeRepository.create(utilityTypeData);
  }

  async getAllUtilityTypes() {
    return await utilityTypeRepository.findAll();
  }

  async getUtilityTypeById(utilityTypeId) {
    return await utilityTypeRepository.findById(utilityTypeId);
  }

  async updateUtilityType(utilityTypeId, updatedData) {
    return await utilityTypeRepository.update(utilityTypeId, updatedData);
  }

  async deleteUtilityType(utilityTypeId) {
    return await utilityTypeRepository.delete(utilityTypeId);
  }
}

module.exports = new UtilityTypeService();