function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })

    return resultado.join('')
}

const ipadPreco = 3500
const ipadParcela = 111.2

console.log(real `1x ${ipadPreco} ou 3x de ${ipadParcela}.`)


function dollar(parts, ...values) {
    results = []
    values.forEach((value, indice) => {
        value = isNaN(value) ? value : `$${value.toFixed(2)}.`
        results.push(parts[indice], value)
    })
    return results.join('')
}

const tecladoPreco = 320
console.log(dollar `Ìsso funciona? ${tecladoPreco}`)