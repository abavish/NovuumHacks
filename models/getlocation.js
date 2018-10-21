const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getLocationSchema = new Schema({
	latitude: String
});

module.exports = mongoose.model('GetLocations', getLocationSchema);