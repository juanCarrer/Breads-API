const express = require('express')
const BreadService = require('../services/breads')

function breadsApi(app) {
	const router = express.Router()
	app.use('/api/breads', router)

	const breadService = new BreadService()

	router.get('/', async (req, res) => {
		try {
			const data = await breadService.getBreads()
			res.json(data)
		} catch (err) {
			console.log('[breads routes]', err.message)
			res.status(500).json({ error: err.message })
		}
	})

	router.get('/:id', async (req, res) => {
		try {
			const bread = await breadService.getOneBread(req.params.id)
			res.json(bread)
		} catch (err) {
			console.log('[breads routes]', err.message)
			res.status(500).json({ error: err.message })
		}
	})

	router.post('/', async (req, res) => {
		try {
			const newBread = await breadService.includeBread(req.body)
			res.json(newBread)
		} catch (err) {
			console.log('[breads routes]', err.message)
			res.status(400).json({ error: err.message })
		}
	})

	router.put('/:id', async (req, res) => {
		try {
			const updatedBread = await breadService.updateBread(req.params.id, req.body)
			res.json(updatedBread)
		} catch (err) {
			console.log('[breads routes]', err.message)
			res.status(400).json({ error: err.message })
		}
	})

	router.delete('/:id', async (req, res) => {
		try {
			const deletedBread = await breadService.deleteBread(req.params.id)
			res.json(deletedBread)
		} catch (err) {
			console.log('[breads routes]', err.message)
			res.status(500).json({ error: err.message })
		}
	})
}

module.exports = breadsApi
