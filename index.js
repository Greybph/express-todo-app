const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Todos = require('./models/Todos')
const Completed = require('./models/Completed')
require('dotenv').config()
const PORT = process.env.PORT || 4000
const homePageController = require('./controllers/homePage')
const createTodoController = require('./controllers/createTodo')
const todoDoneController = require('./controllers/todoDone')
const completedPageController = require('./controllers/completedPage')
const deleteCompletedTodo = require('./controllers/deleteCompletedTodo')

const dbConnect = require('./utils/dbConnect')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

// mongoose.connect(process.env.MONGODB_URI, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// })
dbConnect

app.get('/', homePageController)

app.post('/create', createTodoController)

app.post('/done', todoDoneController)

app.get('/completed', completedPageController)

app.post('/delete', deleteCompletedTodo)

app.listen(PORT)
