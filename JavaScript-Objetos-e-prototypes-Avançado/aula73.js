// Métodos úteis para objetos
// utilizando spred operation
// utilizando Object.assign
const produto = {nome: 'Caneca', preco: 1.8};
const caneca = Object.assign({}, produto, { material: 'porcelana' })

caneca.nome = 'Caneca de programador';
caneca.preco = 1.9;

console.log(produto)
console.log(caneca)