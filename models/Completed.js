const mongoose = require('mongoose')

const mongooseSchema = new mongoose.Schema({
	title: String,
	completedAt: String,
})

module.exports = mongoose.model('Completed', mongooseSchema)
