// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//   titulo: 'Outra coisa qualquer',
//   descricao: 'Outra descrição.'
// })

// HomeModel.find()
// .then((dados) => console.log(dados))
// .catch((erro) => console.log('Erro ocorreu', erro));
// TODO: Aqui temos dois middleware
exports.paginaInicial = (req, res, next) => {
  res.render('index');
  console.log(`'Pagina inicial' Olha o que tem na req.session.nome ${req.session.nome}`)
  next()
}

exports.trataPost = (req, res) => {
  res.send(req.body)
}

