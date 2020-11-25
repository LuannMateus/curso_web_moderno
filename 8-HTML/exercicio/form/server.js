const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app
    .use(bodyParser.urlencoded({extended: true }))  

    .post('/usuarios', (req, res) => {
        console.log(req.body)
        res.send('Parabéns!')
    })

    .post('/usuarios/:id', (req, res) => {
        console.log(req.params.id)  
        console.log(req.body)
        res.send('Parabéns! Usuário alterado!')
    })

    .listen(3003, error => {
        if (error) {
            console.log(error)
            alert('Error ao subir o servidor!')
        } else {
            console.log('Server Online!')
        }
    })
