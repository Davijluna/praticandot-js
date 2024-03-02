// ** Expressão regular literal.

const literal = /ab+c/;

// ** Ou chamando o construtor do objetos RegExp (en-US);

let re = new RegExp("ab+c");

const texto = 'Na escola ensina o'


if(literal.test(texto)) {
  console.log('sim')
} else{
  console.log('não')
}