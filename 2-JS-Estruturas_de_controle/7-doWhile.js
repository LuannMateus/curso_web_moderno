function randomNumber(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let option = -1

do {
    option = randomNumber(-1, 10)
    console.log(`The choice option is ${option}`)
} while (option != -1)

console.log('Until next!')