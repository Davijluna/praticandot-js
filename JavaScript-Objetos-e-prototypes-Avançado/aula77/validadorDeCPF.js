// Criando um validador de CPF.

const CPF = '705.484.450-52'
const cpfLimpo = CPF.replace(/\D+/g, '');

let numero = cpfLimpo

let num2 = 11
let num = []
let recebe;
let convert = 0


for(let index = 0; index < numero.length; index += 1) {

  num += numero[index] * num2
  num2 -= 1
  convert = (Number(num)) + convert

  console.log(convert)
}






// const arraycpf = Array.from(cpfLimpo)
// let coletaNumber = 0;

//   for(const contador of arraycpf) {
//     coletaNumber += parseInt(contador)
//   }

// console.log(coletaNumber);

