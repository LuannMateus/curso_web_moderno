const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Apaga o último elemento do array.
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona no final do array um elemento.
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array.
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona uma elemento no inicio do array.
console.log(pilotos)

// splice pode remover e adicionar elementos.

    //Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

    // Remover
pilotos.splice(3, 1) // Massa quebrou :(
console.log(pilotos)

// slice pega uma parte do array e retorna um novo array com esses elementos.
const algunsPilotos1 = pilotos.slice(2) // Novo array.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Vai do índice 1 até o 4, não contando com o 4.
console.log(algunsPilotos2)
