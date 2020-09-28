// O this fora de uma função não aponta nem para o global ou module.
console.log(this === global)
console.log(this === module)
// O this apornta para exports e module.exports.
console.log(this === exports)
console.log(this === module.exports)

function logThis() {
    console.log('O this dentro uma função...')
    console.log(`É igual a global: ${this === global}`)
}
logThis()