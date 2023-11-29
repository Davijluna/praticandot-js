// *Array.prototype.every()
/**
 * TODO: Exemplo simples do every.
 */

const isBelowThreshold = (currentValue) => currentValue <= 40

const array1 = [1, 30, 39, 29, 10, 13, 40];

console.log(array1.every(isBelowThreshold))

// const isBelowThreshold = (currentValue) => currentValue < 40;

//  const array1 = [1, 30, 39, 29, 10, 13];

//  console.log(array1.every((isBelowThreshold)))

// const isSubset = (array1, array2) => {
//   return array2.every((element) => array1.includes(element));
// }


// console.log(isSubset([1, 3, 4, 5, 9, 7], [5, 9, 0]));
