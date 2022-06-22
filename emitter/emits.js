const Event = require("events")
const emitter = new Event()

emitter.on("load", (e) => {
	console.log(e)
	console.log("data loaded successfully")
})

emitter.on("error", (e) => {
	console.log(e)
	console.log("data error")
})

module.exports = emitter
