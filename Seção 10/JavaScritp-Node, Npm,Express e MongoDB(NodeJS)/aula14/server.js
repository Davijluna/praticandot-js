const express = require('express');
const app = express()

const mongoose = require('mongoose')
const conectionString = "mongodb+srv://root:root@cluster0.eeo6yrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(conectionString)
  .then(() => {
    console.log('Conectei à base de dados.')
    app.emit('pronto')
  });

const routes = require('./routes')
const path = require('path')
const { middlewareGlobal, outroMiddleware } = require('./src/middleware/middleware')

app.use(express.urlencoded({ extended: true }))

// ** adicionando os conteúdos estáticos
// app.use(express.static('./public')) // ! CAMINHO RELATIVO

app.use(express.static(path.resolve(__dirname, 'public'))) // ! CAMINHO ABSOLUTO

// ** nosso própios middleware
// instalar e se cadastrar no mongodb
app.use(middlewareGlobal)
app.use(outroMiddleware)

app.set('views', path.resolve(__dirname, 'src', 'views')) // todo: utilizando a pasta views.

app.set('view engine', 'ejs'); // todo: Utilizando a views engine -> ejs

app.use(routes);

app.on('pronto', () => {

  app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
  })
})
