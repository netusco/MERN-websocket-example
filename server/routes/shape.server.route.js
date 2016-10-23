var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	shapeCtrl = require('../controllers/shape.server.controller'),
	Shape = require('../models/shape.server.model');

router.route('/').get(shapeCtrl.getAll);
router.route('/shape/:id')
	.get(shapeCtrl.read)
	.post(shapeCtrl.create)
	.put(shapeCtrl.update)
	.delete(shapeCtrl.delete);

module.exports = router;
