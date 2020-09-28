/*02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
* Equilátero: Os três lados são iguais. 
* Isósceles: Dois lados iguais.
* Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e 
retorne sua classificação quantoao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).*/

const Triangle = (x, y, z) => {
    if (x === y && y === z) {
        console.log('Equilátero Triangle!')
    } else if (x === y && y != z || y === z && z != x || z === x && x != y) {
        console.log('Isósceles Triangle!')
    } else {
        console.log('Escaleno Triangle!')
    }
}

Triangle(2, 3, 1)
