// Definindo a porta.
const porta = 3003

const express = require('express')
const app = express()
const db = require('./db')
const bodyParse = require('body-parser')


app.use(bodyParse.urlencoded({ extended: true}))

// Pega todos os produtos
app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
})

// Pega produtos com id.
app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

// Salva produtos.
app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

// Altera a partir do id o produto.
app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//Excluir protudo a partir do id.
app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.excluirProduto( req.params.id )
    res.send(produto) //JSON
})

app.listen(porta, _ => {
    console.log(`Servido executando na porta ${porta}.`)
})

