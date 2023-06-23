// Métodos úteis para objetos
// utilizando spred operation
const produto = {nome: 'Caneca', preco: 1.8};
const novoValor = { ...produto };

novoValor.nome = 'Davi';
novoValor.preco = 'Muito caro !!!!!';

console.log(produto)
console.log(novoValor)