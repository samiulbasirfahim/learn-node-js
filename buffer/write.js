const fs = require("fs")

const writeStream = fs.createWriteStream(__dirname + "/data2.txt")
const readFile = fs.createReadStream(__dirname + "/data.txt")

readFile.on("data", (chunk) => {
	writeStream.write(chunk)
})
