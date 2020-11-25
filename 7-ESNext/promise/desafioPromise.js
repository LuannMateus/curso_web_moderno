const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

const caminho = path.join(__dirname + '/dados.txt')

/*const exibirConteudo = (_, conteudo) => {
    console.log(conteudo.toString())
} 

fs.readFile(caminho, exibirConteudo)*/


// Usando Promise.

const exibirConteudo = (path) => {

    return new Promise((resolve, reject) => {
        try {
            fs.readFile(path, (err, conteudo) => {
                resolve(conteudo.toString())
            })
        } catch (err) {
            reject(err)
        }
    })
}

exibirConteudo(caminho)
.then(conteudo => conteudo.split('\n'))
.then(linhas => linhas.join(','))
.then(conteudo => `O resultado final será ${conteudo}.`)
.then(console.log)


