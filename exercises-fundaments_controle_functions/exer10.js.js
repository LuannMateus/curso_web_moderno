/*10)​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false*/


const verificaInt = number => {
    return true ? number % 3 === 0 : false
}

console.log(verificaInt(3))