exports.success = (req, res, status, message) => {
	res.status(status || 200).json({
		body: message,
		error: '',
	})
}

exports.error = (req, res, status, message = 'Error inesperado', err) => {
	console.log('[error info]', err)
	res.status(status || 500).json({
		body: '',
		error: message,
	})
}
