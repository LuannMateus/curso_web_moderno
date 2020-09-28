const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Show the keys of object.
console.log(Object.values(pessoa)) // Show the keys values.
console.log(Object.entries(pessoa)) // Show all keys and values.

Object.entries(pessoa).forEach(([chave, key]) => { // Exemplo da utilização do entries, forEach, destruturing and call back.
    console.log(`${chave}: ${key}`)
}) 

Object.defineProperty(pessoa, 'dataNascimento', { // Define propriedades de um atributo na hora da criação.
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})  

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assing (ECMASCRIPT 2015)
const dest = { a: 1}
const o1 = {b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj) // Deixa o objeto imutável.
obj.c = 1234
console.log(obj)