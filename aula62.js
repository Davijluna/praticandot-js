
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

// Agora não altera o array novo nem nomes o novo2 é independente.
const novo2 = [...nomes]
novo2[3] = 'Davi';
// o que for feito em novo reflete em nomes.
console.log(novo, nomes, novo2)



