// Coleção dinâmica de pares chave/valor.

// Forma de criar objetos - Instanciar.

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco // Deletando um par
delete produto['marca do produto'] 
console.log(produto)

// Forma ded criar objetos - Literal.
const carro = { // É possível adicionar valores, objetos, arrays e funções.
    modelo: 'A4',
    valor: 89000,
    proprietario: { // Objeto
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ // Array com um conjunto de objetos.
        nome: 'Junior',
        idade: 19
    }, 
    {
        nome: 'Ana',
        idade: 42
    }],
    calculaValorSeguro: function() { // Função
        //...
    }
}

carro.proprietario.endereco.logradouro = 'Av.Gigante'
carro['proprietario']['endereco']['numero'] = 1000
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)