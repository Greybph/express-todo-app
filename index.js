const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Todos = require('./models/Todos')
const Completed = require('./models/Completed')
require('dotenv').config()
const PORT = process.env.PORT || 4000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

app.get('/', async (req, res) => {
	const todos = await Todos.find({})
	res.render('index', { todos })
})

app.post('/create', async (req, res) => {
	Todos.create({ title: req.body.todo }, (err) => {
		if (err) {
			res.sendStatus(204)
		}
	})
	const todos = await Todos.find({})
	res.render('index', { todos })
})

app.post('/done', async (req, res) => {
	Todos.findOneAndDelete({ title: req.body['todo'] }, (err, todo) => {
		if (err) console.log(err)
		else return
	})

	Completed.create({
		title: req.body['todo'],
		completedAt: Date.now(),
	})

	const todos = await Todos.find({})
	res.render('index', { todos })
})

app.get('/completed', async (req, res) => {
	const completedTodos = await Completed.find({})
	res.render('completed', { completedTodos })
})

app.listen(PORT)
