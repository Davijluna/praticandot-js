// Concatenando arrays.

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1 + a2;

const a3 = [...a1, 'Davi', ...a2, ...[7, 8, 9]];
// const a3 = a1.concat(a2)

// utilizando o metodo concat"
console.log(typeof a3, a3);