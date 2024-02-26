// For in - Estrutura de repetição.
// Vamos iterar >> sem 'N'
// ESSE TIPO DE FOR É MUITO INTERESSANTE COM OBJETOS.
const pessoa = {
  nome: 'Luiz',
  sobreNome: 'Otavio',
  idade: 36,
}


const frutas = ['maçã', 'pera', 'uva'];

// FOR IN
// Todo: Quando temos um objeto no formato "pessoa" com chave, valor e de uma maneira mais simples,
// Todo: podemos usar o for in dessa forma abaixo.
for(let i in pessoa) {
  console.log(i,': ',pessoa[i]);
}


// Todo: Quando temos um array de objetos no formato "pessoa2" com varias chaves e valores de uma maneira mais estruturada.
// Todo: podemos usar o for in dessa forma abaixo.

const pessoa2 = [
  { nome: "João", sobrenome: "Silva", idade: 30 },
  { nome: "Maria", sobrenome: "Santos", idade: 25 },
  { nome: "Pedro", sobrenome: "Oliveira", idade: 35 },
  { nome: "Ana", sobrenome: "Souza", idade: 28 },
  { nome: "Carlos", sobrenome: "Pereira", idade: 40 },
]

for(let indice in pessoa2) {
  console.log(`nome: ${pessoa2[indice].nome} sobrenome: ${pessoa2[indice].sobrenome} idade ${pessoa2[indice].idade} `)
}
