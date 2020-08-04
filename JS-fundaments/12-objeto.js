/*Objeto são uma classe de pares de chaves e atributos. 
Todo objeto irá ter pares, um identificador que irá receber algum valor.*/
const prod1 = {}

prod1.nome = "biscoito"
prod1.price = 2.4
prod1["Desconto legal"] = 0.4 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    name: 'Camisa Polo',
    price: 79.90 
}

console.log(prod2)