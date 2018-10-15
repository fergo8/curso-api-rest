import * as restify from "restify"

// creating server
const server = restify.createServer({
    name: "meat-api",
    version: "1.0.0"
})

// creating middleware
server.use(restify.plugins.queryParser())

// creating route
server.get("/hello", (req, res, next) => {
    // res.contentType = 'application/json'                 // configurando header contentType
    // res.setHeader("Content-Type", "application/json")    // outra maneira de setar header
    res.send({msg: "hello"})                                // método send() configura header contentType automaticamente
    return next()
})

server.get("/info", (req, res, next) => {
    res.json({
        browser: req.userAgent(),
        method: req.method,
        url: req.url,
        path: req.path(),
        query: req.query
    })
    return next()
})

// registering listener
server.listen(3000, () => {
    console.log("API is running in http://localhost:3000")
})