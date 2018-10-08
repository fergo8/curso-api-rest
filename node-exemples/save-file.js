// Aula 3 - sobre módulos node

const fs = require("fs")

// função writeFile() do módulo File System cria um arquivo de texto
fs.writeFile(process.argv[2], process.argv[3], (err) => {
    if(err) throw err
    console.log(`Arquivo ${process.argv[2]} salvo com sucesso!`)
})