
// nomes[2] = 'Davi';

// delete nomes[1]

// nomes[1] = 1

// const nomes2 = new Array('Davi', 'Pamela', 'Adriana')

// console.log(nomes)
// console.log(nomes2)

// FAZENDO COPIA DA ARRAY.

const nomes= ['Eduardo', 'Maria', 'Joana'];

const novo = nomes;
delete novo[1];

nomes[1] = 'Maria'
// o que for feito em novo reflete em nomes.
console.log(novo, nomes)



