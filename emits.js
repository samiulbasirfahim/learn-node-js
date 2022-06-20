const Event = require("events")
const emitter = new Event()

emitter.on("load", (e) => {
	console.log(e)
	console.log("data loaded successfully")
})

module.exports = emitter
