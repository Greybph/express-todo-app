const Todos = require('../models/Todos')
const Completed = require('../models/Completed')

const todoDone = async (req, res) => {
	Todos.findOneAndDelete({ title: req.body['todo'] }, (err, todo) => {
		if (err) console.log(err)
		else return
	})

	Completed.create({
		title: req.body['todo'],
		completedAt: Date.now(),
	})
	res.redirect('/')
}

module.exports = todoDone
