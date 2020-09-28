/* Arrays são uma espécie de variável composta. No JavaScript é conceito de array possui esse características:
* Heterogêneo: Pode ser colocar vários tipo primitivos diferentes como strings, null, numbers e etc.
* Dinâmico: Ele é mutável, podendo aumentar ou diminuir.
*/

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
 
valores[4] = 10
console.log(valores[4])

// Alguns metódos dos arrays:
console.log(valores)
console.log(valores.length) // .length: Retorna o tamnho do array.

valores.push({id: 3}, false, null, 'teste') // .push(): Adicionar ao final do array valores.
console.log(valores)

console.log(valores.pop()) // .pop(): Apaga o último elemento do array.
delete valores[0] // delete: Apaga o array selecionado.

console.log(typeof valores)