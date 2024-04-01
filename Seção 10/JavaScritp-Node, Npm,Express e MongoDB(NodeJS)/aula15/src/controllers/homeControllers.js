// TODO: Aqui temos dois middleware
exports.paginaInicial = (req, res) => {
  req.session.usuario = { nome: 'Davi', logado: true } ;
  res.render('index');
 return;
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return;
}

