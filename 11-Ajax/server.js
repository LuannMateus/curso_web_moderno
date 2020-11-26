const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app
    .use(express.static('.'))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())


app
    .get('/teste', (req, res) => res.send('Ok'))

    .post('/upload', (req, res) => {
        upload(req, res, err => {
            if (err) {
                return res.end('Ocorreu um erro.')
            }

            res.end('Concluído com sucesso!')
        })
    })

app
    .listen(3000, err => {
        if (err) {
            console.log('Houve algum error!' + err)
        } else {
            console.log('Server Online...')
        }
    })
