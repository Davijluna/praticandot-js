// Prototypes == Protótipos 
// Que são padrões de projetos no ingês "design pattern"

// Pessoa.prototype === pessoa1.__proto__

function Pessoa(nome, sobreNome) {
  this.nome = nome;
  this.sobreNome = sobreNome;
  // this.idade = idade;
  // this.profissão = profissão;
  // essa função irá sobre escrever a do proto.
  // this.nomeCompleto = () => 'Original:' + this.nome + ' ' 
}

// Pessoa.prototype.comprimento = 'Bom da !!!'
Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobreNome;
}

Pessoa.prototype.teste = ' Hahahaha';

const pessoa1 = new Pessoa('Davi', 'Jesus');
const pessoa2 = new Pessoa('Maria', 'Silva');
const data = new Date();

// console.log(pessoa1.nome, pessoa1.sobreNome, pessoa1.idade, pessoa1.profissão, pessoa1.comprimento)
console.dir(pessoa1)
// console.dir(pessoa1.nomeCompleto)
console.dir(Date);