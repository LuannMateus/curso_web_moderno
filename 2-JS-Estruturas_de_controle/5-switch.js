const imprimirResultado  = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Honor Board')
            break
        case 8: case 7:
            console.log('Approved')
            break
        case 6: case 5: case 4:
            console.log('Recuperation')
            break
        case 3: case 2: case 1: case 0:
            console.log('Disapproved')
            break
        default:
            console.log('Invalid Number')
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(0)
imprimirResultado(11)