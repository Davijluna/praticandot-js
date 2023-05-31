// Filter - Filtrando o array.
// filter, map, reduce
// filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasNomesGrande = pessoas.filter(nome => nome.nome.length >= 5);

const pessoasMaisDeCinquenta = pessoas.filter(idade => idade.idade > 50);

const nomeTerminaComA = pessoas.filter(letra => letra.nome.toLowerCase().endsWith('a'));
console.log(pessoasNomesGrande, pessoasMaisDeCinquenta, nomeTerminaComA);









// exemplo anterior.
// const numeros = [5, 50, 1, 4, 5, 90, 50, 30, 6, 8, 10];

// const retorna = numeros.filter(num => num >= 10)

// console.log(retorna);
