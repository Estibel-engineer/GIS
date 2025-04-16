const Utility = require('../models/utility');

class UtilityRepository {
  async create(utilityData) {
    return await Utility.create(utilityData);
  }

  async findAll() {
    return await Utility.findAll();
  }

  async findById(utilityId) {
    return await Utility.findByPk(utilityId);
  }

  async update(utilityId, updatedData) {
    await Utility.update(updatedData, { where: { utility_id: utilityId } });
    return this.findById(utilityId);
  }

  async delete(utilityId) {
    return await Utility.destroy({ where: { utility_id: utilityId } });
  }
}

module.exports = new UtilityRepository();