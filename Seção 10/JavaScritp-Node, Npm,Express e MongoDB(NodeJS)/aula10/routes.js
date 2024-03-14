const express = require('express');
const route = express.Router() // ? Utilizando router com express
const homeController = require('./src/controllers/homeControllers') // ** Aqui eu importei o homeController do caminho mostrado.
const contatoController = require('./src/controllers/contatoController')

// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)

// route.get('/', (req, res) => {
// })



module.exports = route;