var mongoose = require('mongoose'),
	Shape = require('../models/shape.server.model');


exports.getAll = function (req, res, next) {
	Shape.find(function(err, shape) {
		if(err) return next(err);
		res.json(shape);
	});
}

exports.create = function (req, res, next) {
  Shape.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

exports.read = function (req, res, next) {
  Shape.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

exports.update = function (req, res, next) {
  Shape.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

exports.delete = function (req, res, next) {
  Shape.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}
