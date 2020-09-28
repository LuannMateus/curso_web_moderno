const soma = function (x, y) { return x + y }

const imprimirResultado = function (a, b, operation = soma) { 
    console.log(operation(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, function (x, y) { return x - y})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Hello World!')
    }
}

pessoa.falar()