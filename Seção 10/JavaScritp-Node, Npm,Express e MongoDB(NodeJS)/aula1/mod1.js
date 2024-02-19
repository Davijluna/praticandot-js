// !criando o exemplo com classes.

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;

// const nome = 'Luiz';
// const sobrenome = 'Miranda';

// const falaNome = () => {
//   console.log(nome, sobrenome)
// }

// TODO modo mais verboso de exportar
// module.exports.nome = nome;

// TODO atalho para exportar
// exports.nome = nome;

// TODO modo não muito comum para exportar
// this.qualquerCoisa = 'O que quizer exportar'; 
// module.exports.nome = nome;
// module.exports.sobreNome = sobrenome;
// module.exports.falaNome = falaNome;
// this.qualqueCoisa = 'Qual quer coisa !!!!'

// console.log(module.exports);