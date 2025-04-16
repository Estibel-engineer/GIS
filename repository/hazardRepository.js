const Hazard = require('../models/hazard');

class HazardRepository {
  async create(hazardData) {
    return await Hazard.create(hazardData);
  }

  async findAll() {
    return await Hazard.findAll();
  }

  async findById(hazardId) {
    return await Hazard.findByPk(hazardId);
  }

  async update(hazardId, updatedData) {
    await Hazard.update(updatedData, { where: { hazard_id: hazardId } });
    return this.findById(hazardId);
  }

  async delete(hazardId) {
    return await Hazard.destroy({ where: { hazard_id: hazardId } });
  }
}

module.exports = new HazardRepository();