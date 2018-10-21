const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stuffDeatilsSchema = new Schema({
	status: String,
	donorName: String,
	volunteerId: String,
	type: String
});

module.exports = mongoose.model('StuffDetail', stuffDeatilsSchema);