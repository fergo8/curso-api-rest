import * as restify from "restify"
import {environment} from "../common/environment"

export class Server {

    application: restify.Server

    initRoutes(): Promise<any>{
        return new Promise((resolve, reject) => {
            try {

                // creating server
                this.application = restify.createServer({
                    name: "meat-api",
                    version: "1.0.0"
                })

                // creating middleware
                this.application.use(restify.plugins.queryParser())

                // creating route
                this.application.get("/hello", (req, res, next) => {
                    // res.contentType = 'application/json'                 // configurando header contentType
                    // res.setHeader("Content-Type", "application/json")    // outra maneira de setar header
                    res.send({ msg: "hello" })                                // método send() configura header contentType automaticamente
                    return next()
                })

                this.application.get("/info", (req, res, next) => {
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
                this.application.listen(environment.server.port, () => {
                    resolve(this.application)
                })

            } catch(error) {
                reject(error)
            }
        })
    }

    bootstrap(): Promise<Server>{
        return this.initRoutes().then(() => this)
    }
}