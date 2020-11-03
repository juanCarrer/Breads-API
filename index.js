const express = require('express')
const bodyParser = require('body-parser')
const breadsApi = require('./routes/breads')
const { config } = require('./config')

const app = express()

// body parser
app.use(bodyParser.json())

// Routes
breadsApi(app)

// listen
app.listen(config.port, () => {
	console.log(`escuchando en el puerto ${config.port}`) //eslint-disable-line
})
