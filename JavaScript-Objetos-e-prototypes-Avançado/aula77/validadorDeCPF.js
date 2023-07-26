// Criando um validador de CPF.
/**
 * Recebe os CPFs para verificar.
 */
const CPF = '705.484.450-52'
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

// console.log(numero.charAt(numero.length - 1))

if(somaReduceSegundo === Number(numero.charAt(numero.length - 1)) && somaReducePrimeiro === Number(numero.charAt(numero.length - 2))) {
 console.log('CPF Válido !!!')
} else {
  console.log('CPF não Válido')
}

// console.log(somaReducePrimeiro, somaReduceSegundo)

