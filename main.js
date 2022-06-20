const fs = require("fs")
const Event = require("events")

// fs.writeFile("text.js", "const name = 'fahim'", () => {})
// fs.appendFile("text.js", "const name = 'samiul basir'", () => {})

// const textJs = fs.readFileSync("text.js")

// console.log(textJs.toString())

const emitter = new Event()

emitter.on("load", () => {
	console.log("data loaded successfully")
})

setTimeout(() => {
	emitter.emit("load")
}, 3000)
