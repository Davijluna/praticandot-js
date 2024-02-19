// UTILIZANDO FUNÇÃO Splice
// Obs: está função mexe no array original.  

const nomes = ['Davi', 'Maria', 'Pedro', 'José', 'Noemi'];

//simulando o metodo "push".

nomes.splice(nomes.length, 0, 'Davi');

// simulando o metodo "anshift".

nomes.splice(0, 0, 'Davi');

console.log(nomes);

// nomes.splice(indice, delete, elem1, elem2, elem3);

// const removidos = nomes.splice(2, 2);
// utilizando numero negativo
// const removidos = nomes.splice(-2, Number.MAX_VALUE); // o MAX_VALUE mostra quantos elementos eu quero remover começando do indice que eu passei.

// const removidos = nomes.splice(3, 2, 'Luiz', 'Davi');

// simulando o metodo "shift".

// const removidos = nomes.splice(0, 1)

// simulando o metodo "pop".
// const removidos = nomes.splice(-1, 1);


