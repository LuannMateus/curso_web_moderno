function area(largura, comprimento) {
    const area = largura * comprimento
    if (area > 20) {
        console.log(`Value above allowed: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 5, 10))
console.log(area(5, 5))