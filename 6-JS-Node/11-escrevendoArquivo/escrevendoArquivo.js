const fs = require('fs')
const { dirname } = require('path')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

teste = `FUNCIONA`

// wirteFile tem 4 parâmetros: caminho, arquivo.extensão, conteúdo adicionado e uma função callback.
fs.writeFile('6-JS-Node/11-escrevendoArquivo/escrevendoArquivo.js' + 'arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo salvo com sucesso!')
})

fs.writeFile('6-JS-Node/11-escrevendoArquivo/escrevendoArquivo.js' + 'teste.txt', teste, erro => {
    console.log(erro || `Arquivo Saved`)
})