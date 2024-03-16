const express = require('express');
const route = express.Router() // ? Utilizando router com express
const homeController = require('./controllers/homeControllers') // ** Aqui eu importei o homeController do caminho mostrado.
const contatoController = require('./controllers/contatoController')

const exercicioController = require('./controllers/exercicioController')

// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)

// route.get('/', (req, res) => {
// })

// Todo: minha rota de exercicio.

route.post('/exercicio', exercicioController.exercicio)



module.exports = route;