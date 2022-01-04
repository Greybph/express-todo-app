const mongoose = require('mongoose')

const mongooseSchema = new mongoose.Schema({
	title: String,
	completedAt: Date,
})

module.exports = mongoose.model('Completed', mongooseSchema)
