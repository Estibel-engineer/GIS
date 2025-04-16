const hazardService = require('../services/hazardService');

class HazardController {
  async create(req, res) {
    try {
      const hazard = await hazardService.createHazard(req.body);
      res.status(201).json(hazard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const hazards = await hazardService.getAllHazards();
      res.status(200).json(hazards);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const hazard = await hazardService.getHazardById(req.params.id);
      if (!hazard) return res.status(404).json({ error: 'Hazard not found' });
      res.status(200).json(hazard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const hazard = await hazardService.updateHazard(req.params.id, req.body);
      if (!hazard) return res.status(404).json({ error: 'Hazard not found' });
      res.status(200).json(hazard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await hazardService.deleteHazard(req.params.id);
      if (result === 0) return res.status(404).json({ error: 'Hazard not found' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new HazardController();