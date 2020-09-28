// A variável do tipo let pode receber varios valores no decorrer do código, mas só pode ser declarada uma vez.
/* Escopo: let possui três escopos: 
* Global: Quando está fora de uma função ou bloco.
* Local: Quando está dentro de uma função.
* Interno: Quando está dentro de um bloco.
*/

// Let dentro de um bloco:
var numero = 1
{
    let numero = 2
    console.log(`Dentro = ${numero}`)
}

console.log(`Fora = ${numero}`)