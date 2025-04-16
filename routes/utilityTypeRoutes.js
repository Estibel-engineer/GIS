const express = require('express');
const router = express.Router();
const utilityTypeController = require('../controllers/utilityTypeController');

router.post('/', utilityTypeController.create);
router.get('/', utilityTypeController.getAll);
router.get('/:id', utilityTypeController.getById);
router.put('/:id', utilityTypeController.update);
router.delete('/:id', utilityTypeController.delete);

module.exports = router;