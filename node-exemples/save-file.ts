/* Aula 3 - sobre módulos node
 * Aula 5 - sobre npm e módulo yargs
 */

import * as fs from "fs"
import * as yargs from "yargs"

const argv = yargs
            .alias("f", "filename")     // cria o alias "f" para o parâmetro "filename"
            .alias("c", "content")      // cria o alias "c" para o parâmetro "content"
            .demandOption("filename")   // cria o parâmetro "filename" na constante "argv"
            .demandOption("content")    // cria o parâmetro "content" na constante "argv"
            .argv

// função writeFile() do módulo File System cria um arquivo de texto
// os parâmetros argv.filename e argv.content substituem process.argv[i] de uma maneira mais concisa
fs.writeFile(argv.filename, argv.content, (err) => {
    if(err) throw err
    console.log(`Arquivo ${argv.filename} salvo com sucesso!`)
})