const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
	volunteerName: String,
	location: String
});

module.exports = mongoose.model('Volunteer', volunteerSchema);