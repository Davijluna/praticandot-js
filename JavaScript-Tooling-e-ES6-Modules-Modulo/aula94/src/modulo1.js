// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

const nome = 'Davi';
const sobrenome = 'Jesus de Luna';
const idade = 36;

function soma(x, y) {
  return x + y;
}

export {
  nome,
  sobrenome,
  idade,
  soma
}

// podemos exportar tanto de manera completa usando todas de uma vez como de maneira individual 