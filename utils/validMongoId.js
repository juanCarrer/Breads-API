const mongoose = require('mongoose')

function validMongoId(id) {
	return mongoose.Types.ObjectId.isValid(id)
}

module.exports = validMongoId
