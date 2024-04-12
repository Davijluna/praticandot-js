const Home = require('../models/HomeModel')

exports.paginaInicial = async (req, res) => {
  try {
    const taskList = await Home.find();
    return res.render('index', taskList);
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
  
}

exports.createTask = async (req, res) => {
  const task = req.body;

  if(!task.titulo) {
   return res.redirect("/")
  }

  try {
    await Home.create(task)
    return res.redirect("/")
  } catch (err) {
    res.status(500).send({error: err.message})
  }
};


exports.trataPost = (req, res) => {
  res.send(req.body)
  return;
}

