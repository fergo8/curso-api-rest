/* Aula 1 sobre recursividade
 * Aula 2 sobre objeto global e process
 * 
 */

console.log("n-fatorial");

console.log(`Caminho: ${process.cwd()}`)    // process.cwd() mostra o caminho do diretório atual

const fatorial = (num) => {
    if(num === 0){
        return 1
    }
    return num * fatorial(num-1)
}

const num = parseInt(process.argv[2])   // process.argv[i] array de argumentos enviados via terminal

console.log(`Fatorial de ${num} = ${fatorial(num)}`)