const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Síncrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assíncrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


// Lendo um arquivo JSON.
const config = require('./arquivo.json')
console.log(config)

//Lendo pastas...
fs.readdir('./', (err, arquivos) => {
    console.log('Arquivos da pasta...')
    console.log(arquivos)
})