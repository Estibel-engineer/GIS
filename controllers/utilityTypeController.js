const utilityTypeService = require('../services/utilityTypeService');

class UtilityTypeController {
  async create(req, res) {
    try {
      const utilityType = await utilityTypeService.createUtilityType(req.body);
      res.status(201).json(utilityType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const utilityTypes = await utilityTypeService.getAllUtilityTypes();
      res.status(200).json(utilityTypes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const utilityType = await utilityTypeService.getUtilityTypeById(req.params.id);
      if (!utilityType) return res.status(404).json({ error: 'Utility Type not found' });
      res.status(200).json(utilityType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const utilityType = await utilityTypeService.updateUtilityType(req.params.id, req.body);
      if (!utilityType) return res.status(404).json({ error: 'Utility Type not found' });
      res.status(200).json(utilityType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await utilityTypeService.deleteUtilityType(req.params.id);
      if (result === 0) return res.status(404).json({ error: 'Utility Type not found' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UtilityTypeController();