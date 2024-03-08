const express = require('express');
const route = express.Router() // ? Utilizando router com express

route.get('/', (req, res) => {
  res.send(`<h1>Hello world</h1>
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Enviar o formulário</button>
  </form>`);
});