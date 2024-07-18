exports.paginaInicial = (req, res) => {
  console.log(req.session.usuario, 'teste3')
  req.session.usuario = { nome:'Davi', logado: true }
  // if (req.session) {
  //   req.session.usuario = { nome: 'Davi', logado: true }
  // } else {
  //   console.log('Erro: req.session não está definido. ')
  // }
    res.render('index')
    //   titulo:'este será o titulo',
    //   numero:[0,1,2,3,4,5,6,7]
    // });
 return;
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return;
}

