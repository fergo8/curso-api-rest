import {Server} from "./server/server"
import {usersRouter} from "./users/users.router"

const server = new Server()

server.bootstrap([usersRouter])
    .then(server => console.log("API is running in", server.application.address()))
    .catch(error => {
        console.log("Server failed to start")
        console.log(error)
        process.exit(1)
    })