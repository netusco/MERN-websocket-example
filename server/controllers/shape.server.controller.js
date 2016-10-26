var mongoose = require('mongoose'),
	shapesData = require('../data/shapes.json'),
	Shape = require('../models/shape.server.model');

// initializing shapes
Shape.find(function(err, shapes) {
	if(err) console.log('error initializing shapes', err);
	if(shapes.length === 9) {
		console.log(shapes.length + ' shapes already exist in db', shapes);
		return true;
	} else {
		Shape.create(shapesData.shapes, function (err, post) {
			if(err) console.log('error initializing shapes', err);
			console.log('created sucessfully all shapes', post);
		});
	}
}) 

exports.getAllForStats = function (req, res, cb) {
	Shape.find(function(err, shapes) {
		if (err) return cb(err);
		return cb(null, shapes);
	});
}

exports.getAll = function (req, res, next) {
	Shape.find(function(err, shapes) {
		if(err) return next(err);
		res.json(shapes);
	});
}

exports.create = function (req, res, next) {
	Shape.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
}

exports.read = function (req, res, next) {
	Shape.findById({ _id: req.params.id }, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
}

exports.update = function (req, res, next) {
	Shape.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
}

exports.delete = function (req, res, next) {
	Shape.findByIdAndRemove({ _id: req.params.id }, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
}
