/*setTimeout(() => {
    console.log('Executando callback...')
    setTimeout(_ => {
        console.log('Executando callback...')
        setTimeout(_ => {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)*/

// Usando promise
const wait = (tempo = 2000) => {
    
    return new Promise(resolve => {
        setTimeout(_ => {
            console.log('Executando Promise!')
            resolve('Vishh')
        }, tempo)
        
        
    })
}

wait(3000)
.then(_ => wait())
.then(wait)


