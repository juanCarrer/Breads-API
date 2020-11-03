const mongoose = require('mongoose')

// mongoose.Promise = global.Promise;
async function connect(url) {
	mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	console.log('[db] conectado con exito');
}

module.exports = connect
