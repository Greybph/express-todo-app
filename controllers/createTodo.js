const Todos = require('../models/Todos')

const createTodo = async (req, res) => {
	Todos.create({ title: req.body.todo }, (err) => {
		if (err) {
			res.sendStatus(204)
		}
	})
	res.redirect('/')
}

module.exports = createTodo
