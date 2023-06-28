// Prototypes == Protótipos 
// Que são padrões de projetos no ingês "design pattern"

// Pessoa.prototype === pessoa1.__proto__

function Pessoa(nome, sobreNome, idade, profissão) {
  this.nome = nome;
  this.sobreNome = sobreNome;
  this.idade = idade;
  this.profissão = profissão;
  // essa função irá sobre escrever a do proto.
  this.nomeCompleto = () => 'Original:' + this.nome + ' ' 
}

Pessoa.prototype.comprimento = 'Bom da !!!'
Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobreNome;
}

const pessoa1 = new Pessoa('Davi', 'Jesus', 36, 'Programador')

console.log(pessoa1.nome, pessoa1.idade, pessoa1.profissão, pessoa1.comprimento)
console.log(pessoa1.nomeCompleto)