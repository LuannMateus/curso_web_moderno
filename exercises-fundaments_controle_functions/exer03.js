/*03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

const Potencia = (base, expo) => {
    let x = 1

    for (i = 0; i < expo; i++) {
        x *= base 
    }
    return x
}

console.log(Potencia(4, 2))