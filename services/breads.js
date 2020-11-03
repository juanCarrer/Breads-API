const breadModel = require('../utils/models/breads')
const MongoLib = require('../lib/mongo')

class BreadsService {
	constructor() {
		this.mongoDB = new MongoLib()
		this.model = breadModel
	}

	async getBreads() {
		const data = await this.mongoDB.getAll(this.model)
		return data || {}
	}

	async getOneBread(id) {
		const bread = await this.mongoDB.getOne(this.model, id)
		return bread || {}
	}

	async includeBread(data) {
		const newBread = await this.mongoDB.includeOne(this.model, data)
		return newBread || {}
	}

	async updateBread(id, data) {
		const updateBread = await this.mongoDB.updateOne(this.model, id, data)
		return updateBread || {}
	}

	async deleteBread(id) {
		const deletedBread = await this.mongoDB.removeOne(this.model, id)
		return deletedBread || {}
	}
}

module.exports = BreadsService
