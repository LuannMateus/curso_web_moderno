Number.prototype.entre = function (start, end) {
    return this >= start && this <= end
}

const line = function() {
    console.log('------------------')
}
const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Honor board')
    } else if (nota.entre(7, 8.99)) {
        console.log('Approved!')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperation!')
    } else if (nota.entre(0, 3.99)) {
        console.log('Disapproved!!!')
    } else {
        console.log('Invalid Number!')
    }
}

line()
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(0)
imprimirResultado(-1)
imprimirResultado(11)
line()