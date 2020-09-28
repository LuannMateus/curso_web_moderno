console.log(typeof Array, typeof new Array, typeof []) // Array é uma função, e sua forma literal é um objeto.

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Adição literal.
console.log(aprovados[0]) 
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // Adição dinâmica.
aprovados.push('Abia') // Adiciona um elemento ao final do array.
console.log(aprovados.length) // Mostra a quantidade de elementos no array.

aprovados[9] = 'Rafael' // Caso seja adicionado um elemento além do index existente, os outros lugar se tornarão undefined
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Organiza um array.
console.log(aprovados)

delete aprovados[1] // Delete um elemento do array.
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Forma de apagar ou adicionar valores em um array.
console.log(aprovados)