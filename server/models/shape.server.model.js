var mongoose = require('mongoose');

var ShapeSchema = new mongoose.Schema({
	link: String,
	name: String,
	color: String,
	seen: Number
});

module.exports = mongoose.model('Shape', ShapeSchema);
