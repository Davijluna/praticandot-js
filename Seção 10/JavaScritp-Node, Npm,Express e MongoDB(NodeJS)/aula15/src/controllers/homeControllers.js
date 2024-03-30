// TODO: Aqui temos dois middleware
exports.paginaInicial = (req, res) => {
  console.log(req.session.nome)
  res.render('index');
 return
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return
}

