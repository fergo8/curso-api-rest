import * as restify from "restify"
import * as mongoose from "mongoose"
import {environment} from "../common/environment"
import {Router} from "../common/router"
import {mergePatchBodyParser} from "./merge-patch.parser"

export class Server {

    application: restify.Server

    initializeDb(): mongoose.MongooseThenable {
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect(environment.db.url, {
            useMongoClient: true
        })
    }

    initRoutes(routers: Router[]): Promise<any>{
        return new Promise((resolve, reject) => {
            try {

                // creating server
                this.application = restify.createServer({
                    name: "meat-api",
                    version: "1.0.0"
                })

                // creating middleware
                this.application.use(restify.plugins.queryParser())
                this.application.use(restify.plugins.bodyParser())
                this.application.use(mergePatchBodyParser)

                // creating route
                for (let router of routers) {
                    router.applyRoutes(this.application)
                }

                /*
                this.application.get("/hello", (req, res, next) => {
                    // res.contentType = 'application/json'                 // configurando header contentType
                    // res.setHeader("Content-Type", "application/json")    // outra maneira de setar header
                    res.send({ msg: "hello" })                                // método send() configura header contentType automaticamente
                    return next()
                })

                this.application.get("/info", [
                    (req, res, next) => {
                        if (req.userAgent() && req.userAgent().includes("MSIE 7.0")) {
                            let error: any = new Error()
                            error.statusCode = 400
                            error.message = "Please, update your browser"
                            return next(error)
                        }
                        return next()
                    },
                    (req, res, next) => {
                        res.json({
                            browser: req.userAgent(),
                            method: req.method,
                            url: req.url,
                            path: req.path(),
                            query: req.query
                        })
                        return next()
                    }
                ])
                */

                // registering listener
                this.application.listen(environment.server.port, () => {
                    resolve(this.application)
                })

            } catch(error) {
                reject(error)
            }
        })
    }

    bootstrap(routers: Router[] = []): Promise<Server>{
        return this.initializeDb().then(() => this.initRoutes(routers).then(() => this))
    }
}