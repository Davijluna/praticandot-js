
// // nomes[2] = 'Davi';

// // delete nomes[1]

// // nomes[1] = 1

// // const nomes2 = new Array('Davi', 'Pamela', 'Adriana')

// // console.log(nomes)
// // console.log(nomes2)

// // FAZENDO COPIA DA ARRAY.

// const nomes= ['Eduardo', 'Maria', 'Joana'];

// const novo = nomes;
// delete novo[1];

// nomes[1] = 'Maria'

// // Agora não altera o array novo nem nomes o novo2 é independente.
// const novo2 = [...nomes]
// novo2[3] = 'Davi';
// // o que for feito em novo reflete em nomes.
// console.log(novo, nomes, novo2)

// // length é um atributo do array ou variavel ele não é um metodo.
// console.log(novo.length, nomes.length, novo2.length)

// // usando pop no array
// // retornando o elemento removido.
// const comPop = novo.pop();
// console.log(novo, comPop);


// usando shift no array
// retornando o elemento removido.
// const comShift =  novo.shift()
// console.log(novo, '!!!!!!!!');
// console.log(comShift)

// dicionando ao array;
// usando o push adiconamos ao final do array.
// const amigo = ['Davi', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// // const amigoAdicionado = amigo.push('Jesus');

// const novo = amigo.slice(0, -1);
// console.log(novo);

const nome = 'Davi, Jesus, de, Luna';
const porVigula = nome.split(', ')
const nomes = nome.split(' ');

// transformando o array em string novamente 

const nome2 = nomes.join(' ');

console.log(nomes);
console.log(nome2);

