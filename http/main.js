const http = require("http")
const port = 4000

const server = http.createServer((req, res) => {
	console.log(req.url)
	if (req.method === "GET") {
		if (req.url === "/") {
			res.write("<p>Welcome!</p>")
			res.end()
		} else {
			res.write("<p>" + req.url +  " " + "not found</p>")
			res.end()
		}
	}
})

server.listen(port)
