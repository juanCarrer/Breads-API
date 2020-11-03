const mongoose = require('mongoose')

const { Schema } = mongoose

const breadsSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	ingredients: {
		type: [String],
		required: true,
	},
})

module.exports = mongoose.model('Breads', breadsSchema)
