import * as restify from "restify"

// creating server
const server = restify.createServer({
    name: "meat-api",
    version: "1.0.0"
})

// creating route
server.get("/hello", (req, res, next) => {
    res.send({msg: "hello"})
    return next()
})

// registering listener
server.listen(3000, () => {
    console.log("API is running in http://localhost:3000")
})