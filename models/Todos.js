const mongoose = require('mongoose')

const TodosSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('Todos', TodosSchema)
