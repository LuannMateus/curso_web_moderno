// Tratamento de erros: try / catch.

const funcionarOuNao = (valor, chanceErro) => {

    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) {
                reject('Ocorreu um error!')
            } else {
                resolve(valor)
            }
        } catch (err) {
            reject(err)
        }
       
    })
}

funcionarOuNao('10', 0.2)
.then(v => `Valor: ${v}`)
//.then(v => consol.log(v), err => console.log(`Erro Esp: ${err}`)) // Trantando erro no then.
.then(_ => console.log('Quase Fim!'))
.catch(err => console.log(`Error: ${err}`))
.then(_ => console.log('FIM'))