const emitter = require("./emits")

setTimeout(() => {
	emitter.emit("load", {
		name: "fahim",
		age: 17,
	})
}, 3000)
