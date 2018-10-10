/* Aula 1 - sobre recursividade
 * Aula 2 - sobre objeto global e process
 * Aula 5 - sobre npm e módulo yargs
 */

const fatorial = require("./fatorial")
const argv = require("yargs").demandOption("num").argv

console.log("n-fatorial")
// console.log(`Caminho: ${process.cwd()}`)  // process.cwd() mostra o caminho do diretório atual
// const num = parseInt(process.argv[2])     // process.argv[i] array de argumentos enviados via terminal

const num = argv.num

console.log(`Fatorial de ${num} = ${fatorial(num)}`)