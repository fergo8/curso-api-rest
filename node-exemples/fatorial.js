// Aula 4 - sobre export e require

const fatorial = (num) => {
    if (num === 0) {
        return 1
    }
    return num * fatorial(num - 1)
}

module.exports = fatorial;


/*
Ordem de identificação do require:
- package.json
- arquivo
- diretório
*/