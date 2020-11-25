// Uma função async sempre retorna uma Promise.
const esperarPor = (tempo = 2000) => {
    return new Promise((resolve, reject) => {
        setTimeout(_ => { resolve() }, tempo)
    })
}

/*const retornarValor = () => {
    return new Promise(resolve => {
        setTimeout(_ => resolve(10), 2000)
    })
}*/
/*
esperarPor(2000) // Usando then
.then(() => console.log('Executando promise 1...'))
.then(esperarPor)
.then(() => console.log('Executando promise 2...'))
.then(esperarPor)
.then(() => console.log('Executando promise 3...'))
*/
// Async / Await. O await só pode ser colocado dentro de uma função async.
// Caso seja usado uma função sem utilizar o await, o que ele irá retornar é uma promise <peding>.
async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`'Async / Await ${valor + 1}...'`)
    await esperarPor(1500)
    console.log(`'Async / Await ${valor + 2}...'`)
    await esperarPor(1500)
    console.log(`'Async / Await ${valor + 3}...'`)

    return valor
}

async function retornarValor() {
    return 20
}

executar()


