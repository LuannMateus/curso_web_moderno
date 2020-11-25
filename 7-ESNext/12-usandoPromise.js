// Com promise.
const http = require('http') // Importando o module http.

const getTurma = letra => {
    const url = (`http://files.cod3r.com.br/curso-js/turma${letra}.json`) // Definindo o url da página.
    
    return new Promise((resolve, reject) => { // Usando o promise.

        http.get(url, res => { // Método GET para pegar os dados da página.
            let resultado = ''
    
            res.on('data', dados => { // Usando o parâmetro de res.on data, para pegar os dados e concatenar em uma variável.
                resultado += dados
            })
    
            res.on('end', _ => { // Usando promise para tranformar os JSON em objetos reais.
                try {
                    resolve(JSON.parse(resultado))
                }
                catch (err) { // Usando catch junto com o reject para pegar os erros.
                    reject(err)
                }
            })
        })
    })
    
}

let nomes = []

/*getTurma('A').then((alunos) => {
    nomes = nomes.concat(alunos.map(valor => `A: ${valor.nome}`)) // Concatenando e usando a função map para tranformar tudo em um array
    getTurma('B').then(alunos => { // callback hell usando Promise
        nomes = nomes.concat(alunos.map(valor => `B: ${valor.nome}`))
        getTurma('C').then(alunos => { // callback hell usando Promise
            nomes = nomes.concat(alunos.map(valor => `'C: ${valor.nome}`))
            console.log(nomes)
        })
    })
})*/

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(aluno => aluno.nome))
.then(x => console.log(x))
.catch(err => console.error(err))
