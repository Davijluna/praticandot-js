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

for(let i in pessoa) {
  console.log(i,': ',pessoa[i]);
}
