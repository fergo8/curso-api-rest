const users = [
    { name: "Andie", email: "chuchu@andie.com" },
    { name: "Samuélico", email: "chuchu@samuelico.com" }
]

export class User {
    static findAll(): Promise<any[]>{
        return Promise.resolve(users)
    }
}