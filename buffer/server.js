const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>buffer</title>
        </head>
        <body>
            <form method="post" action="/post">
            input: <input type="text" name="input" />
            </form>
        </body>
        </html>
        `)
		res.end()
	} else if (req.url === "/post" && req.method === "POST") {
		let body = ""
		req.on("data", (chunk) => {
			body += chunk
		})
		req.on("end", () => {
			res.write(body)
			res.end()
			if (!fs.existsSync("data.txt")) {
				fs.writeFile("data.txt", body, (err) => {
					if (err) {
						console.log(err)
					}
				})
			} else {
				fs.appendFile(
					"data.txt",
					`
                ${body}`,
					(err) => {
						if (err) {
							console.log(err)
						}
					}
				)
			}
		})
	}
})

server.listen(3000, () => {
	console.log("server is running on port 3000")
})
