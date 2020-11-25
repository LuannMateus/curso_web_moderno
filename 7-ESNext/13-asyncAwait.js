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

// Recurso do ES8
// Objetivo de simplificar o uso de promises..
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')

    return [].concat(ta, tb, tc)
} // Retorna um objeto AsyncFunction.

obterAlunos()
.then(alunos => alunos.map(valor => valor.nome))
.then(nomes => console.log(nomes))