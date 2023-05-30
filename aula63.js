// UTILIZANDO FUNÇÃO Splice
// Obs: está função mexe no array original.  

const nomes = ['Davi', 'Maria', 'Pedro', 'José'];

// nomes.splice(indice, delete, elem1, elem2, elem3);

// const removidos = nomes.splice(2, 2);
// utilizando numero negativo
const removidos = nomes.splice(-2, Number.MAX_VALUE); // o MAX_VALUE mostra quantos elementos eu quero remover começando do indice que eu passei.
console.log(nomes, removidos);
