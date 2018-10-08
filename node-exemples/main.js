/* Aula 1 - sobre recursividade
 * Aula 2 - sobre objeto global e process
 */

const fatorial = require("./fatorial")

console.log("n-fatorial")
console.log(`Caminho: ${process.cwd()}`)    // process.cwd() mostra o caminho do diretório atual

const num = parseInt(process.argv[2])   // process.argv[i] array de argumentos enviados via terminal

console.log(`Fatorial de ${num} = ${fatorial(num)}`)