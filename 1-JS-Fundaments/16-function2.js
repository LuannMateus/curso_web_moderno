//Armazenando uma função em uma variável:
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável:
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// Retorno implíticto:
const subtracao = (a, b) => a - b
console.log(subtracao(2, 2))

// Retorno impícito com um parâmetro:
const mostraString = a => console.log(a)
mostraString('Funciona')