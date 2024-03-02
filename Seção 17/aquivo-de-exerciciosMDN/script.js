// ** Expressão regular literal.

const literal = /ab+c/;

// ** Ou chamando o construtor do objetos RegExp (en-US);

let re = new RegExp("ab+c");

const texto = 'Na escola ensina o abc'


const result = literal.exec(texto)[0]
if(literal.test(texto)) {
  console.log( result)
} else{
  console.log('não', result)
}