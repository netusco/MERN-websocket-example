var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	statisticsCtrl = require('../controllers/statistics.server.controller'),
	shapeCtrl = require('../controllers/shape.server.controller');

router.route('/shapes')
	.get(shapeCtrl.getAll)
	.post(shapeCtrl.create);

router.route('/shape/:id?')
	.get(shapeCtrl.read)
	.post(shapeCtrl.create)
	.put(shapeCtrl.update)
	.delete(shapeCtrl.delete);

router.route('/statistics')
	.get(statisticsCtrl.getAll)
	.post(statisticsCtrl.create)
	.delete(statisticsCtrl.delete);

module.exports = router;
