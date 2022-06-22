const fs = require("fs")

const dataStream = fs.createReadStream(__dirname + "/data.txt", "utf8")

dataStream.on("data", (chunk) => {
	console.log(chunk)
})

// fs.readFile("data.txt", (err, data) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(data.toString())
// 	}
// })
