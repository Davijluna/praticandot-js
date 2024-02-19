// FUNÇÕES IMEDIATAS OU FUNÇOES AUTO INVOCADAS.
// MAS NA VERDADE O NOME DESSA FUNÇÃO .
// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
  const sobrenome = ' Jesus de Luna'
 function criaNome(nome) {
  return nome + '' + sobrenome
 }

 function falaNome() {
  console.log(criaNome('Davi'))
 }
 falaNome();
 console.log(idade, peso, altura)

})(35, 77, 1.70);

// const nome = 'Qualquer coisa';
// function qualquerCoisa() {
//   console.log(3)
// }

// qualquerCoisa();