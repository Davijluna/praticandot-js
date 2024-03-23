exports.middlewareGlobal = (req, res, next) => {
  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log('Seu outro middleware');
  next();
}