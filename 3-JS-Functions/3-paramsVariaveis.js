function soma() {
    let s = 0

    for (i in arguments) {
        s += teste[i]
    }
    return console.log(s)
}

soma()
soma(1)
soma(2, 3, 1)
soma(3.2, 1.2, 2)
soma('Olá', 'Mundo')
soma(1, 2, 3, 'Olá')