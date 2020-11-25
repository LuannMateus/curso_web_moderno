const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.react) // Forma errada.
console.log(tecnologias.get('react').framework) // Forma correta.

// Passando vários atributos para o map.
const chavesVariadas = new Map([
    [function () {}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // Tem o atributo? .has
chavesVariadas.delete(123) // Deletando o atributo 123. .delete()
console.log(chavesVariadas.has(123))    
console.log(chavesVariadas.size) // Tamanho do map.

chavesVariadas.set(123, 'a') // Adicionando valores.
chavesVariadas.set(123, 'b') // O map não aceita chaves repetidas, então ele sobreescreve os valores.
chavesVariadas.set(456, 'a') // Adicionando um novo objeto no map.
console.log(chavesVariadas)
