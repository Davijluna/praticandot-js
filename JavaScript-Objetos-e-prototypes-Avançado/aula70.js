// Revisando Ojetos

// Metodos são funcões que estão dentro do objeto que executão ações.







// utilizando construtor

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30

pessoa1.falarNomre = function() {
  console.log(`${this.sobrenome} está falando seu nome e tem ${this.idade} anos de idade`);
}

pessoa1.falarNomre();

delete pessoa1.nome;

console.log(pessoa1)

for (let chave in pessoa1) {
  console.log(chave, 'aqui pega a chave')
}

for (let chave in pessoa1) {
  console.log(pessoa1, 'aqui pega o objeto completo')
}

for (let chave in pessoa1) {
  console.log(pessoa1[chave], 'aqui pega o objeto completo')
}




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