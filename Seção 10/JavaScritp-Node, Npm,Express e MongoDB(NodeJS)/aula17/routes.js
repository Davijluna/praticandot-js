const express = require('express');
const route = express.Router() // ? Utilizando router com express
const homeController = require('./src/controllers/homeControllers') // ** Aqui eu importei o homeController do caminho mostrado.
const contatoController = require('./src/controllers/contatoController')

function meuMiddleware(req, res, next) {
  req.session = {nome: 'Davi', sobrenome: 'Jesus de Luna'}
  console.log()
  console.log('Passei no seu middleware.')
  console.log()
  next();
}

// Rotas da Home
route.get('/',meuMiddleware, homeController.paginaInicial, function (req, res, next) {
  console.log();
  console.log('Ainda estou aqui...');
  console.log(`'Ultimo middleware.' Olha o que tem na req.session.nome ${req.session.nome}`)
  
}); // TODO: Este paginaInicial é de homeControlle
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial) // TODO: Este paginaInicial é de contatoController

// route.get('/', (req, res) => {
// })


module.exports = route;