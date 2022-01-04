const Completed = require('../models/Completed')

const completedPage = async (req, res) => {
	const completedTodos = await Completed.find({})
	res.render('completed', { completedTodos })
}

module.exports = completedPage
