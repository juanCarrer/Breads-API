const validMongoId = require('../services/validMongoId')
const MyError = require('../utils/myError')
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
				reject(new MyError('[mongo] error en getAll', 'Error inesperado', 500))
			}
		})
	}

	getOne(model, id) {
		return new Promise(async (resolve, reject) => {
			if (!validMongoId(id)) {
				reject(new MyError('[mongo] id invalido', 'el id no es valido', 400))
			}

			try {
				const data = await model.findOne({ _id: id })
				resolve(data)
			} catch (err) {
				console.error(err)
				reject(new MyError('[mongo] error en getOne', 'Error inesperdado', 500))
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
				reject(new MyError('[mongo] error en getOne', 'Error inesperdado', 500))
			}
		})
	}

	updateOne(model, id, newData) {
		return new Promise(async (resolve, reject) => {
			if (!validMongoId(id)) {
				reject(new MyError('[mongo] id invalido', 'el id no es valido', 400))
			}

			try {
				const updatedData = await model.findByIdAndUpdate(id, { $set: newData })
				resolve(updatedData)
			} catch (err) {
				console.error(err)
				reject(new MyError('[mongo] error en updateOne', 'Error inesperdado', 500))
			}
		})
	}

	removeOne(model, id) {
		return new Promise(async (resolve, reject) => {
			if (!validMongoId(id)) {
				reject(new MyError('[mongo] id invalido', 'el id no es valido', 400))
			}

			try {
				const deletedData = await model.findOneAndRemove({ _id: id })
				resolve(deletedData)
			} catch (err) {
				console.error(err)
				reject(new MyError('[mongo] error en updateOne', 'Error inesperdado', 500))
			}
		})
	}
}

module.exports = MongoLib
