/*01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, 
subtração,multiplicação e divisão desses valores.*/ 

const Sum = (a, b) => {
    
   let obj = {
        soma: a + b,
        sub: a - b,
        multi: a * b,
        div: a / b,
    }
    
    return obj
}

console.log(Sum(3, 3))