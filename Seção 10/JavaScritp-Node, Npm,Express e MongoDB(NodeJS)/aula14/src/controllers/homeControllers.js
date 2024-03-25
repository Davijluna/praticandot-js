// TODO: Aqui temos dois middleware
exports.paginaInicial = (req, res, next) => {
  res.render('index');
  console.log(`'Pagina inicial' Olha o que tem na req.session.nome ${req.session.nome}`)
  next()
}

exports.trataPost = (req, res) => {
  res.send(req.body)
}

