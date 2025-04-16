const nearestFeatureService = require('../services/nearestFeatureService');

class NearestFeatureController {
  async create(req, res) {
    try {
      const feature = await nearestFeatureService.createFeature(req.body);
      res.status(201).json(feature);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const features = await nearestFeatureService.getAllFeatures();
      res.status(200).json(features);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const feature = await nearestFeatureService.getFeatureById(req.params.id);
      if (!feature) return res.status(404).json({ error: 'Feature not found' });
      res.status(200).json(feature);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const feature = await nearestFeatureService.updateFeature(req.params.id, req.body);
      if (!feature) return res.status(404).json({ error: 'Feature not found' });
      res.status(200).json(feature);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await nearestFeatureService.deleteFeature(req.params.id);
      if (result === 0) return res.status(404).json({ error: 'Feature not found' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new NearestFeatureController();