exports.middlewareGlobal = (req, res, next) => {
  console.log('Primeiro middleware')
  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log('Seu outro middleware');
  next()
}