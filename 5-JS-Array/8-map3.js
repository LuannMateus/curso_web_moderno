Array.prototype.map2 = function(callback) {
    const arrayMap = []

    for (let i = 0; i < this.length; i++) {
        arrayMap.push(callback(this[i], i, this))
    }
    
    return arrayMap
} 

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const pegaValor = produto => produto.preco 

const precos = carrinho.map2(paraObjeto).map2(pegaValor)

console.log(precos)