const express = require('express');
const router = express.Router();
const nearestFeatureController = require('../controllers/nearestFeatureController');

router.post('/', nearestFeatureController.create);
router.get('/', nearestFeatureController.getAll);
router.get('/:id', nearestFeatureController.getById);
router.put('/:id', nearestFeatureController.update);
router.delete('/:id', nearestFeatureController.delete);

module.exports = router;