/*04)​Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores.*/

const Divisao = (dividendo, divisor) => {
    let result = dividendo / divisor;
    let resto = dividendo % divisor;

    const resultado = {
        result,
        resto
    }

    return resultado;
}

console.log(Divisao(2, 2))