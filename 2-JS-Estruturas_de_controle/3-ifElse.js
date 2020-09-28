const imprimirResultado = function(nota) {
    if (Number(nota)) {

        if (nota >= 7) {
            console.log('Approved!')
        } else {
            console.log('Disapproved')
        }

    } else {
        console.log('Not a number')
    }
    
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('Epa') // Cuidado com os tipos primitivos...!!
