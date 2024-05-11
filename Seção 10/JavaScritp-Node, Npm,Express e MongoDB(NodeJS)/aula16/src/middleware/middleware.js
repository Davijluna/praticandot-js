exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variável'
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next()
}