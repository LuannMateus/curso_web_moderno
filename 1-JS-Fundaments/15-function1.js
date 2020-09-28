// Função sem retorno:
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
//Caso seja passado apenas um argumento, o valor será NaN, pois ele soma um valor númerico com um undefined:
imprimirSoma(2)
//Caso seja passado valores além dos argumentos existentes, ele ignorará os valores excedentes.
imprimirSoma(2, 3, 4, 5, 6)
//Caso não seja passo nenhum valor para os argumentos, retornará NaN, pois os valore são undefined.
imprimirSoma()

//Função com retorno: 
function retornarSoma(a, b=1) {
    return a + b
}

console.log(`O retorno funcionorá: ${retornarSoma(2, 3)}`)
console.log(`O retorno funcionará, pois existe um valor padrão nos argumentos: ${retornarSoma(2)}`)
console.log(retornarSoma())