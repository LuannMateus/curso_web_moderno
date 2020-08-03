// Valores Booleanos são valores de true or false.
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// No JavaScript alguns valores podem ser transformados em expressões booleanas.
// Valores que pode ser transformados em True. 
console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Valores que podem ser transformados em False.
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// É possível usar esse conceito para utilizarmos operadores lógicos para forma algumas expressões.
console.log('E para finalizar...')

let nome = ''
// Se nome for false, 'Unknow' será mostrado, caso seja true, variável nome será mostrada. 
console.log(nome || 'Unknown')