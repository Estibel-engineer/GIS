const UtilityType = require('../models/utilityType');

class UtilityTypeRepository {
  async create(utilityTypeData) {
    return await UtilityType.create(utilityTypeData);
  }

  async findAll() {
    return await UtilityType.findAll();
  }

  async findById(utilityTypeId) {
    return await UtilityType.findByPk(utilityTypeId);
  }

  async update(utilityTypeId, updatedData) {
    await UtilityType.update(updatedData, { where: { utility_type_id: utilityTypeId } });
    return this.findById(utilityTypeId);
  }

  async delete(utilityTypeId) {
    return await UtilityType.destroy({ where: { utility_type_id: utilityTypeId } });
  }
}

module.exports = new UtilityTypeRepository();