// *Array.prototype.every()
/**
 * TODO: Exemplo simples do every.
 */

// const isBelowThreshold = (currentValue) => currentValue <= 40

// const array1 = [1, 30, 39, 29, 10, 13, 40];

// console.log(array1.every(isBelowThreshold))


const data = [
  { nome: "Davi", idade: 36, avaliacao: false, salario: 13000 },
  { nome: "João", idade: 32, avaliacao: false, salario: 3000},
  { nome: "Maria", idade: 28, avaliacao: false, salario: 2500 },
  { nome: "Marta", idade: 21, avaliacao: false, salario: 4500 }
]

 const showData = data.every((valor) => valor.salario > 1000);

 console.log(showData)

// const isBelowThreshold = (currentValue) => currentValue < 40;

//  const array1 = [1, 30, 39, 29, 10, 13];

//  console.log(array1.every((isBelowThreshold)))

// const isSubset = (array1, array2) => {
//   return array2.every((element) => array1.includes(element));
// }


// console.log(isSubset([1, 3, 4, 5, 9, 7], [5, 9, 0]));
