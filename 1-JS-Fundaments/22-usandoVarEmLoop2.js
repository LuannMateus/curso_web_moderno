/*Quando usamos uma função anônima para pegar valores relacionado ao uma função var, ele não pegará o resultado
que está sendo passado corretamente. O que irá acontecer é que a função só pegará o último valor da vairável.
No caso desse exemplo, as funções todas terão valor 10*/ 
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[0]()