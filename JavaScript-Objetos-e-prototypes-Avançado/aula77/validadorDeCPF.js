// Criando um validador de CPF.
/**
 * Recebe os CPFs para verificar.
 */
const CPF = '111.111.111-11'
/**
 * Limpando os caracteres que não são números
 * 
 */
const cpfLimpo = CPF.replace(/\D+/g, '');
let numero = cpfLimpo

let num2 = 10
let num3 = 11

let primeiro = 0
let segundo = 0

let recebe;
let convertPrimeiro = 0
let convertSegundo = 0
let totalPrimeiro = 0;
let totalSegundo = 0;

let somaReduce;

for(let index = 0; index < numero.length; index += 1) {
  if(cpfLimpo != 11 && cpfLimpo.length === '00000000000') {
    console.log('CPF inválido !!!!')
  } else {
  if(num2 >= 2) {
      primeiro += numero[index] * num2
      convertPrimeiro = (Number(primeiro))
      totalPrimeiro += convertPrimeiro
      primeiro = '';
      convertPrimeiro = 0
      num2 -= 1
    }
  }
}

for(let index = 0; index < numero.length; index += 1) {
  if(cpfLimpo != 11 && cpfLimpo.length === '00000000000') {
    console.log('CPF inválido !!!!')
  } else {
    if(num3 >= 2) {
      segundo += numero[index] * num3
      convertSegundo = (Number(segundo))
      totalSegundo += convertSegundo
      segundo = '';
      convertSegundo = 0
      num3 -= 1
    } 
  }
  
}
const somaReducePrimeiro = 11 - (totalPrimeiro % 11)
const somaReduceSegundo = 11 - (totalSegundo % 11)

const valorFinal1 = somaReducePrimeiro >= 10 ? 0 : somaReducePrimeiro
const valorFinal2 = somaReduceSegundo >= 10 ? 0 : somaReduceSegundo

if(somaReduceSegundo === Number(numero.charAt(numero.length - 1)) && somaReducePrimeiro === Number(numero.charAt(numero.length - 2))) {
 console.log('CPF Válido !!!')
} else {
  console.log('CPF não Válido')
}


// Rascunho para melhor compreensão da solução feita em aula.

// // Aqui eu criei a função com que vai passar as heranças para as demais.
// function Protuto(nome, preco) {
//   this.nome = nome;
//   this.preco = preco;
// }

// // passando para o prototype do Protudo a função que aumenta os valores.
// Protuto.prototype.aumento = function(valor) {
//   this.preco += valor;
// }

// // Criando a função que herdara os atributos da função Produto.
// // Na função alêm do que já é herdado podemos acrescentar atributos também isso aconteceu na cor nessa funçao.
// function Fusca(nome, preco, cor) {
//   // Utilizamos o call que é uma espécie de this (toda função têm um 'call').
//   Protuto.call(this, nome, preco, cor)
// }

// // Associando o prototype da função Fusca ao prototype da função Produto usando Object.create().
// Fusca.prototype = Object.create(Protuto.prototype)

// // Criando uma constante e inicializando a função Fusca com new e adicionando os valores que já tinha sido herdados 
// const fusca = new Fusca('meu Fusca', 1000, 'preto')

// // chamando a função aumento e adicionando um novo valor.
// fusca.aumento(10)

// // Chamando fusca no console  para ver todo o returno no terminal.
// console.log(fusca)


// Código do Professor 



