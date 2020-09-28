// Forma padrão.
let dobro = function(a) {
    return 2 * a
}

// Forma arrow.
dobro = a => 2 * a // Return está implicito.
console.log(dobro(Math.PI))

let ola = () => 'Olá'
ola = _ => 'Olá' // Possui um param (_).
console.log(ola())
