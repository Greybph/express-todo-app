const Todos = require('../models/Todos')

const homePage = async (req, res) => {
	const todos = await Todos.find({})
	res.render('index', { todos })
}

module.exports = homePage
