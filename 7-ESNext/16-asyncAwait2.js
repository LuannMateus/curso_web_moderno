// Tratamento de erros.
function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtNumeros, tent = 1) {
    try {
        const numeros = []
    
        for (let _ of Array(qtNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (err) {
        if (tent > 10) {
            throw "Que chato!!"
        } else {
            return gerarMegaSena(qtNumeros, tent + 1)
        }
    }

   
}

gerarMegaSena(20)
.then(console.log)
.catch(console.log)