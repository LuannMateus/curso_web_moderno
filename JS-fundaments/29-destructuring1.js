// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Criando constantes baseado nas keys e pegando os seus valores.
const { nome, idade  } = pessoa

console.log(nome, idade)

// Criando constantes distintas e pegando os valores das keys mencionadas.
const {nome: n, idade: i} = pessoa

console.log(n, i)

// Acessando keys que não existem. sobrenome retornará undefined e bemHumorada tem por default true.
const { sobrenome, bemHumorada = true} = pessoa

console.log(sobrenome, bemHumorada)

// Acessando o objeto endereco, buscando as keys mencionadas. Casa alguma key mencionada não exista, ele retornará undefined
const { endereco: { logradouro, numero, cep} } = pessoa

console.log(logradouro, numero, cep)

// Acessar um objeto e os elementos desse objeto que não existem no Object pessoa. Caso isso aconteça haverá erros. 
//const { conta: { ag, num} } = pessoa

//console.log(ag, num)