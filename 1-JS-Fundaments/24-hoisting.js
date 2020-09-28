/* hoisting é um comportamento que quando uma variável é declarada e antes da declaração ela é chamada, existe
um içamento, onde essa variável é jogada para cima.*/
console.log("a = ", a)
var a = 1
console.log(a)


/* Error: O hoisting não funciona com o let e const.
console.log("b = ", b)
let b = 2
console.log(b)*/ 