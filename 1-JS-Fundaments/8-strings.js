const escola = 'Cod3r'

console.log(escola.charAt(3)) // Pega o valor na posição de índice 3
console.log(escola.charAt(5)) // Como esse índice não existe, o JavaScript retorna um valor vazio.
console.log(escola.charCodeAt(3)) // Retorna o código da tabela ASC
console.log(escola.indexOf('o')) // Retorna a posição do argumento na string.

console.log(escola.substring(1)) // Retorna a partir do posição do argumento os valores na string.
// Retorna a partir da posição inicial, até o argumento final, ignorando o último.
console.log(escola.substring(0, 3)) 

console.log('Escola ' + escola + ('!')) // Concatena (Junção) strings. 
console.log('Escola '.concat(escola).concat('!')) // Outra forma de concatenação.
console.log(escola.replace('3', 'e')) // Replace (Substituí) o argumento '3' pelo argumento 'e'

// Splita os valores a partir de onde existir a virgula, dando a eles uma posição de índice.
console.log('Ana,Maria,Silva'.split(',')) 