const utilityService = require('../services/utilityService');

class UtilityController {
  async create(req, res) {
    try {
      const utility = await utilityService.createUtility(req.body);
      res.status(201).json(utility);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const utilities = await utilityService.getAllUtilities();
      res.status(200).json(utilities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const utility = await utilityService.getUtilityById(req.params.id);
      if (!utility) return res.status(404).json({ error: 'Utility not found' });
      res.status(200).json(utility);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const utility = await utilityService.updateUtility(req.params.id, req.body);
      if (!utility) return res.status(404).json({ error: 'Utility not found' });
      res.status(200).json(utility);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await utilityService.deleteUtility(req.params.id);
      if (result === 0) return res.status(404).json({ error: 'Utility not found' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UtilityController();