const express = require('express');
const router = express.Router();
const hazardController = require('../controllers/hazardController');

router.post('/', hazardController.create);
router.get('/', hazardController.getAll);
router.get('/:id', hazardController.getById);
router.put('/:id', hazardController.update);
router.delete('/:id', hazardController.delete);

module.exports = router;