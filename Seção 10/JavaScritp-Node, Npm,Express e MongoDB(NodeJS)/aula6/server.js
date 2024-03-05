const express = require('express');
const app = express()


//               CRIAR   LER  ATUALIZAR  APAGAR
// TODO: CRUD -> CREATE, READ, UPDATE,   DELETE
// **             POST   GET   PUT       DELETE


app.get('/', (req, res) => {
  res.send(`<h1>Hello world</h1>
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>`);
});

app.post('/', (req, res) => {
  res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente.')
})

app.listen(3000, () => {
  console.log('acessar http://localhost:3000')
  console.log('Servidar executando na porta 3000')
})
