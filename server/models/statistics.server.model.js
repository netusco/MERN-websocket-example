var mongoose = require('mongoose');

var StatisticsSchema = new mongoose.Schema({
	seenCat: Boolean,
	seenColor: Boolean,
	agent: String,
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Statistics', StatisticsSchema);
