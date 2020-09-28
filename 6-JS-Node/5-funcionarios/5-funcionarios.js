const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

// Desafio: Ache a mulher chinesa com o menor salário.

const pegaChinesas = e => {
    if (e.pais === 'China' && e.genero === 'F') {
        return e
    }
}

/* My version: 
const pegaSalario = e => e.salario

const pegaMenorSalario = e => {
    if (e.salario === menor) {
        return e
    }
}

axios.get(url).then(response => {

    const funcionarios = response.data

    const chinesas = funcionarios.filter(pegaChinesas)

    const salarios = chinesas.map(pegaSalario)

    menor = salarios[0]

    for (c in salarios) {
        if (salarios[c] < menor) {
            menor = salarios[c]
        }
    }

    const chinesaComMenorSalario = chinesas.filter(pegaMenorSalario)

    console.log(chinesaComMenorSalario)
})
*/



// Teacher version:
axios.get(url).then(response => {

    const funcionarios = response.data

    const func = funcionarios
    .filter(pegaChinesas)
    .reduce((func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    })

    console.log(func)
})