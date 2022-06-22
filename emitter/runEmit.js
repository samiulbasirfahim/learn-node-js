const emitter = require("./emits")

setTimeout(() => {
	emitter.emit("load", {
		name: "fahim",
		age: 17,
	})
}, 3000)

setTimeout(() => {
	emitter.emit("error", {
		err: "there was an error loading the file",
		statusbar: "error",
	})
}, 5000)
