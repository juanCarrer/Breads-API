const express = require('express')
const BreadService = require('../services/breads')
const response = require('../utils/response')

function breadsApi(app) {
	const router = express.Router()
	app.use('/api/breads', router)

	const breadService = new BreadService()

	router.get('/', async (req, res) => {
		try {
			const data = await breadService.getBreads()
			response.success(req, res, 200, data)
		} catch (err) {
			response.error(req, res, err.status, err.responseMessage, err)
		}
	})

	router.get('/:id', async (req, res) => {
		try {
			const bread = await breadService.getOneBread(req.params.id)
			response.success(req, res, 200, bread)
		} catch (err) {
			response.error(req, res, err.status, err.responseMessage, err)
		}
	})

	router.post('/', async (req, res) => {
		try {
			const newBread = await breadService.includeBread(req.body)
			res.json(newBread)
		} catch (err) {
			response.error(req, res, err.status, err.responseMessage, err)
		}
	})

	router.put('/:id', async (req, res) => {
		try {
			const updatedBread = await breadService.updateBread(req.params.id, req.body)
			res.json(updatedBread)
		} catch (err) {
			response.error(req, res, err.status, err.responseMessage, err)
		}
	})

	router.delete('/:id', async (req, res) => {
		try {
			const deletedBread = await breadService.deleteBread(req.params.id)
			res.json(deletedBread)
		} catch (err) {
			response.error(req, res, err.status, err.responseMessage, err)
		}
	})
}

module.exports = breadsApi
