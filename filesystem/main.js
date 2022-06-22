const fs = require("fs")

// fs.writeFile("text.js", "const name = 'fahim'", () => {
// 	fs.appendFile("text.js", "const name = 'samiul basir'", () => {
// 		const textJs = fs.readFileSync("text.js")
// 		console.log(textJs.toString())
// 	})
// })

// fs.readFile("package.txt", (err, data) => {
// 	console.log(err || data.toString())
// })

// let i = 0

// const timer = setInterval(() => {
// 	console.log(console.log(__filename))
// 	i++
// 	if (i > 2) {
// 		clearInterval(timer)
// 	}
// }, [300])
for (let i = 0; i < 10000000; i++) {
	const element = i
	fs.appendFileSync(
		"package.txt",
		`
hello world ${element}
`
	)
}
