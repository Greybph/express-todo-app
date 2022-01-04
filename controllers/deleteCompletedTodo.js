const Completed = require('../models/Completed')

const deleteCompletedTodo = (req, res) => {
	Completed.findOneAndDelete({ title: req.body.todo }, (err, todo) => {
		if (err) console.log(err)
		else return
	})
	res.redirect('completed')
}

module.exports = deleteCompletedTodo
