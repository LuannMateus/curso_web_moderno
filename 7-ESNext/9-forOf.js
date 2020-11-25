// For of "anda" pelos valores.
for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// For in "anda" pelos índice.
for (let index in assuntosEcma) {
    console.log(index)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])

// Andando por um map
for (let value of assuntosMap) {
    console.log(value)
}

// Retornando as chaves.
for (let keys of assuntosMap.keys()) {
    console.log(keys)
}

// Retornando os valores.
for (let values of assuntosMap.values()) {
    console.log(values)
}

// Retornando par chave e valor.
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

// Usando um for of em um Set.
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}