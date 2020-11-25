const gerarNumerosEntre = (min, max) => {
    if (min > max) {
        [max, min] = [min, max]
    }

    const fator = max - min + 1
    const random = parseInt(Math.random() * fator) + min
    return new Promise((resolve, reject) => {
        try{
            resolve(random)
        } catch (err) {
            reject(err)
        }
    })
}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(num10 => `O número gerado foi ${num10}`)
    .then(console.log)
    .catch(err => `Error: ${err}`)