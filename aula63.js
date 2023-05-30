// UTILIZANDO FUNÇÃO Splice
// Obs: está função mexe no array original.  

const nomes = ['Davi', 'Maria', 'Pedro', 'José'];

// nomes.splice(indice, delete, elem1, elem2, elem3);

// const removidos = nomes.splice(2, 2);
// utilizando numero negativo
const removidos = nomes.splice(-2, 1);
console.log(nomes, removidos);
