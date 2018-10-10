/* Aula 1 - sobre recursividade
 * Aula 2 - sobre objeto global e process
 * Aula 5 - sobre npm e módulo yargs
 * Aula 6 - sobre typescript e tsc (compiller)
 */

import {fatorial} from "./fatorial"
import * as yargs from "yargs";
const argv = yargs.demandOption("num").argv

console.log("n-fatorial")
// console.log(`Caminho: ${process.cwd()}`)  // process.cwd() mostra o caminho do diretório atual
// const num = parseInt(process.argv[2])     // process.argv[i] array de argumentos enviados via terminal

const num = argv.num

console.log(`Fatorial de ${num} = ${fatorial(num)}`)