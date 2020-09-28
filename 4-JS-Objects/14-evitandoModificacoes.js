// Object.preventExtensions. 
const produto = Object.preventExtensions({ // Não permite adicionar atributos.
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

// Object.seal.
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa) // Não permiti adicionar ou apagar atributos.
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze. // Não permite nenhuma modificação.