// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//   titulo: 'Titulo novo',
//   descricao: 'Descrição nova'
// })
  // .then(dados => console.log(dados))
  // .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index', {
      titulo:'este será o titulo',
      numero:[0,1,2,3,4,5,6,7]
    });
 return;
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return;
}

