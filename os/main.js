const os = require("os")

switch (os.platform()) {
	case "linux":
		console.log("this is a linux based system")
		break
	case "windows":
		console.log("this is a windows based system")
		break
	case "mac":
		console.log("this is a mac based system")
		break
	case "win32":
		console.log("this is a windows 32 based system")
		break
	case "win64":
		console.log("this is a windows 64 based system")
		break
	default:
		console.log("this is unknown platform")
		break
}

const home = os.userInfo().username

console.log("username: " + home)

