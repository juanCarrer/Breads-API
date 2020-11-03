const validMongoId = require('../utils/validMongoId')
const { config } = require('../config')
const connect = require('../dataBase')

class MongoLib {
	constructor() {
		connect(config.mongoUrl)
	}

	getAll(model) {
		return new Promise(async (resolve, reject) => {
			try {
				const data = await model.find({})
				resolve(data)
			} catch (err) {
				console.error(err)
				reject(new Error('error inesperado'))
			}
		})
	}

	getOne(model, id) {
		return new Promise(async (resolve, reject) => {
			if (!validMongoId(id)) {
				reject(new Error('el id no es valido'))
			}

			try {
				const data = await model.findOne({ _id: id })
				resolve(data)
			} catch (err) {
				console.error(err)
				reject(new Error('error inesperado'))
			}
		})
	}

	includeOne(Model, data) {
		return new Promise(async (resolve, reject) => {
			try {
				const newModel = new Model(data)
				const response = await newModel.save()
				resolve(response)
			} catch (err) {
				console.error(err)
				reject(new Error('error inesperado al incluir data'))
			}
		})
	}

	updateOne(model, id, newData) {
		return new Promise(async (resolve, reject) => {
			try {
				const updatedData = await model.findByIdAndUpdate(id, { $set: newData })
				resolve(updatedData)
			} catch (err) {
				console.error(err)
				reject(new Error('error inesperado al modificar data'))
			}
		})
	}

	removeOne(model, id) {
		return new Promise(async (resolve, reject) => {
			try {
				const deletedData = await model.findOneAndRemove({ _id: id })
				resolve(deletedData)
			} catch (err) {
				console.error(err)
				reject(new Error('error inesperado al eliminar data'))
			}
		})
	}
}

module.exports = MongoLib
