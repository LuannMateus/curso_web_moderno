// Classical form - Nessa forma existe apenas um bug, quando é passado zeros, é entendido que zero será falso.
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(2), soma1(2, 3, 4), soma1(0, 0, 0))
// Strategies 2, 3, 4 to generate default values.
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Default value of ES2015.
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))