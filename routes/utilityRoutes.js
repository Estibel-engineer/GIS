const express = require('express');
const router = express.Router();
const utilityController = require('../controllers/utilityController');

router.post('/', utilityController.create);
router.get('/', utilityController.getAll);
router.get('/:id', utilityController.getById);
router.put('/:id', utilityController.update);
router.delete('/:id', utilityController.delete);

module.exports = router;