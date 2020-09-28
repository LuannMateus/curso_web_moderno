// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar uma função de forma literal.
function fun1() { }

// Armazenar em uma variável.
const fun2 = function () {}

// Armazenar em um array.
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atribute de um objeto.
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar uma function como parâmetro.
function run(fun) {
    fun()
}

run(function () { console.log('Running...')})

// Uma função pode retornar/conter um outra função.
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const soma5 = soma(2, 3)
soma5(4)