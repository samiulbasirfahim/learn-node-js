const fs = require("fs")
const path = require("path")
const http = require("http")
const { StringDecoder } = require("string_decoder")

const fullPath = path.join(__dirname, "/data")
const server = http.createServer((req, res) => {
	if (req.method === "POST") {
		let data = ""
		const decoder = new StringDecoder()
		req.on("data", (chunk) => {
			data += decoder.write(chunk)
		})
		req.on("end", () => {
			console.log(data)
			writeFile(req.url, req.headers.filename, data, (err) => {
				if (err) {
					res.end("There was an error writing to file")
				} else {
					res.end("File written successfully")
				}
			})
		})
	}
})

server.listen(3000, () => {
	console.log("server is running on port 3000")
})

const writeFile = (subFolder, fileName, data, callback) => {
	console.log(subFolder)
	fs.promises.mkdir(fullPath + subFolder, { recursive: true })
	fs.open(
		fullPath + subFolder + "/" + fileName + ".json",
		"wx",
		(err, fd) => {
			if (err) {
				callback("file already exists")
			} else {
				fs.writeFile(fd, data, (err) => {
					callback(err)
				})
			}
		}
	)
}
