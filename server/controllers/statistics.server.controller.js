var mongoose = require('mongoose'),
	Statistics = require('../models/statistics.server.model');

exports.getAll = function (req, res, cb) {
	Statistics.find(function(err, statistics) {
		if (err) return cb(err);
		return cb(null, statistics);
	});
}

exports.create = function (req, res, next) {
	Statistics.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
}

exports.delete = function (req, res, next) {
	Statistics.findByIdAndRemove({ _id: req.params.id }, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
}
