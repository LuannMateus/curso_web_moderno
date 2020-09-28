function criarProduto(name, price) {
    return {
        name,
        price,
        discount: '2%'
    }
}

console.log(criarProduto('Leite', 2.5))