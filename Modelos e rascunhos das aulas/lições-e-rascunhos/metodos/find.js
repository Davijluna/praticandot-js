// Trabalhando com o metodo find


// utilizando o include

const array = [
  {nome: "Davi", idade: 36, sexo: "masculino"},
  {nome: "Maria", idade: 46, sexo: "feminino"},
  {nome: "Fernando", idade:26, sexo: "masculino"},
  {nome: "Ana", idade: 16, sexo: "feminino"},
  {nome: "Sara", idade: 12, sexo: "feminino"},
]

let myName = "Davi";
 
const getName = (nameIndex, arrayNames) => {
  const nameReturn = arrayNames.filter(name => name === nameIndex)
  if(!nameIndex) {
    return 'Nome não existe!'
  }
  if (nameReturn === nameIndex) {
    return nameIndex
  }
}

console.log(getName(myName, array))

// function pessoa(array) {
//   array.forEach((user) => {
//     console.log(user.nome);
//   })
// };

// pessoa(array)




// Utilizando find para encontrar o primeiro valor.
// const array = [50, 100, 330, 104, 9]

// const funcArray = array.find((number) => number < 40)

// console.log(funcArray)


// Encontre um objeto em uma matriz por uma de suas propriedades

// const inventory = [
//   {name: "apples", quantity: 2},
//   {name: "banana", quantity: 0},
//   {name: "cherries", quatity: 5},
// ]

// function isCherries(fruit) {
//   return fruit.name === "cherries"
// }

// console.log(inventory.find(isCherries))

// Usando função de seta e desestruturação

// const inventory = [
//   {name: "apples", quantity: 2},
//   {name: "banana", quantity: 0},
//   {name: "cherries", quatity: 5},
// ]

// const result = inventory.find(({ name }) => name === "cherries")

// console.log(result)

// Encontre um número primo em uma matriz

// function isPrime(element, index, array) {
//   let start = 2;
//   while (start <= Math.sqrt(element)) {
//     if (element % start++ < 1) {
//       return false;
//     }
//   }
//   return element > 1;
// }

// console.log([4, 6, 8, 12].find(isPrime));
// console.log([4, 5, 8, 12].find(isPrime))

// Usando o terceiro argumento de callbackFn

// const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];

// function numero(value) {
//   return value > 2 } 

// const teste = numbers.find((index) => index > -2);

// console.log(teste)

// const firstTroungh = numbers.filter((num) => num > 0).find((num, idx, arr) => {
//   if (idx > 0 && num >= arr[idx -1]) return false;
//   if (idx < arr.length - 1 && num >= arr[idx + 1 ]) return false;
//   return true;
// })

// console.log(firstTroungh)


// const arrayLike = {
//   length: 3,
//   "-1": 0.1,
//   0: 2,
//   1: 7.3,
//   2: 4,
// }

// console.log(Array.prototype.find.call(arrayLike, (x) => Number.isInteger(x)));
