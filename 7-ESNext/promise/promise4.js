const gerarNumerosEntre = (min, max, tempo) => {
    if (min > max) {
        [max, min] = [min, max]
    }

    const fator = max - min + 1
    const random = parseInt(Math.random() * fator) + min
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            try{
                resolve(random)
            } catch (err) {
                reject(err)
            }
        }, tempo) 
        
    })
}

console.time('promise')

const gerar10 = () => {
    return Promise.all([
        gerarNumerosEntre(1, 10, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

gerar10()
.then(console.log)
.then(_ => console.timeEnd('promise'))

