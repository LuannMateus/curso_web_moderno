/*Template strings - São formas de interporlar variáveis utilizando a concatenação
* Para usa-lo deve utilizar as crases `expressão`
* Comando: `${variável ou expressão}`
*/

const nome = 'Rebeca'
const concatena = 'Olá' + nome + '!'
//O template aceita quebra de linhas e espaçamentos.
const template = ` 
    Olá
    ${nome}
`

console.log(concatena, template)

//expressões...
console.log(`1 + 1 = ${1 + 1}`)

// Função arrow
const up = texto => texto.toUpperCase()

console.log(`Ei.. ${up('Be careful')}`)