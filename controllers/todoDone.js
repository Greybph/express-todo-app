const Todos = require('../models/Todos')
const Completed = require('../models/Completed')

const todoDone = async (req, res) => {
	const date = new Date()

	Todos.findOneAndDelete({ title: req.body['todo'] }, (err, todo) => {
		if (err) console.log(err)
		else return
	})

	Completed.create({
		title: req.body['todo'],
		completedAt: date.toLocaleDateString().replace('20', ''),
	})
	res.redirect('/')
}

module.exports = todoDone
