// Revisando Ojetos

// PADRÕES DE PROJETOS.
// Factory functions / Constructor functions / Classes

// Factory functions 
// function criaPesssoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     }
//   }
// }
// testar

// const p1 = criaPesssoa('Davi', 'Jesus');
// console.log(p1.nomeCompleto)

// Constructor functions 
// revisar
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// A palavra new vai criar um objeto vazio
// new Também vai pegar a palavra this 
const p2 = new Pessoa('Davi', 'Jesus');
p2.nome = 'Outra coisa'
const p3 = new Pessoa('Davi', 'Jesus');
console.log(p2);
console.log(p3);


// PARA TRAVAR A ALTERAÇÃO PARA NÃO MEXER PODEMOS USAR O SEGUINTE CÓDIGO. 

// Object.freeze(nomeDoObjeto)




// const p3 = {};
// p3.nome = 'Davi';




// /////////////////
// Metodos são funcões que estão dentro do objeto que executão ações.
// utilizando construtor
// Quando functions estão dentro de Objetos nos chamamos essas functions de Metodos.

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 2;
// pessoa1.falarNomre = function() {
//   return (`${this.sobrenome} está falando seu nome e tem ${this.idade} anos de idade`);
// }

// pessoa1.getDataNascimento = function() {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade; 
// }

// console.log(pessoa1.getDataNascimento());

// pessoa1.falarNomre();

// delete pessoa1.nome;

// console.log(pessoa1)

// for (let chave in pessoa1) {
//   console.log(chave, 'aqui pega a chave')
// }

// for (let chave in pessoa1) {
//   console.log(pessoa1, 'aqui pega o objeto completo')
// }

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave], 'aqui pega o objeto completo')
// }

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome)

// const pessoa2 = {
//   nome: 'Luiz',
//   sobrenome: 'Otávio'
// }

// const pessoa = {
//   nome: 'Luiz',
//   sobrenome: 'Otávio',
// }

// s
// // outra maneira de utilizar objetos
// const chave = 'nome';

// console.log(pessoa[chave])
// // console.log(pessoa['nome']);