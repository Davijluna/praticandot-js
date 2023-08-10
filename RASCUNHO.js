// CLASSES 
class Personagen {
  constructor(nome, type, arma, vida) {
    this.nome = nome;
    this.type = type;
    this.arma = arma;
    this.vida = vida;
  }

  ataque() {
    if(this.vida >= 2) {
     this.vida-= 2;
     console.log('vida :', typeof this.vida)
    //  return this.vida
    } if(this.vida < 2) {
      console.log('Você Perdeu.');
    }
  }
}

const Heroi = new Personagen('Olavo', 'Guerreiro', 2, 10)

Heroi.ataque()
Heroi.ataque()
Heroi.ataque()
Heroi.ataque()
Heroi.ataque()

console.log(Heroi)

// function pessoa(nome, idade) {
//   return {
//     nome: idade,
//     idade: nome,
    


//   }
// }

// const informacão = pessoa('Davi', 35);

// console.log(informacão.idade)

// Aqui eu criei a função com que vai passar as heranças para as demais.
// function Protuto(nome, preco) {
//   this.nome = nome;
//   this.preco = preco;
// }

// passando para o prototype do Protudo a função que aumenta os valores.
// Protuto.prototype.aumento = function(valor) {
//   this.preco += valor;
// }

// Criando a função que herdara os atributos da função Produto.
// Na função alêm do que já é herdado podemos acrescentar atributos também isso aconteceu na cor nessa funçao.
// function Fusca(nome, preco, cor) {
//   // Utilizamos o call que é uma espécie de this (toda função têm um 'call').
//   Protuto.call(this, nome, preco, cor)
// }

// Associando o prototype da função Fusca ao prototype da função Produto usando Object.create().
// Fusca.prototype = Object.create(Protuto.prototype)

// Criando uma constante e inicializando a função Fusca com new e adicionando os valores que já tinha sido herdados 
// const fusca = new Fusca('meu Fusca', 1000, 'preto')

// chamando a função aumento e adicionando um novo valor.
// fusca.aumento(10)

// Chamando fusca no console  para ver todo o returno no terminal.
// console.log(fusca)
