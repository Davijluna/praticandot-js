// Criando um validador de CPF.

const CPF = '705.484.450-52'
const cpfLimpo = CPF.replace(/\D+/g, '');

let numero = cpfLimpo

let num2 = 10
let num = []
let recebe;
let convert = 0
let total = 0;


for(let index = 0; index < numero.length; index += 1) {
  if(num2 >= 2) {
    num += numero[index] * num2
    convert = (Number(num))
    total += convert
    num = ''
    convert = 0
    num2 -= 1
  }
  // num = 0
  console.log(total)
}






// const arraycpf = Array.from(cpfLimpo)
// let coletaNumber = 0;

//   for(const contador of arraycpf) {
//     coletaNumber += parseInt(contador)
//   }

// console.log(coletaNumber);

