class MyError extends Error {
	constructor(message, responseMessage, status) {
		super(message)
		this.responseMessage = responseMessage
		this.status = status
	}
}

module.exports = MyError
