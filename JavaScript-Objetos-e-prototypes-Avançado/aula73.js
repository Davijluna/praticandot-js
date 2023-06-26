// Métodos úteis para objetos
// utilizando spred operation
// utilizando Object.assign
// copiando um objeto no outro
// utilizando Object.key
// utilizando Object.freeze
// Object.getOwnPropertyDescriptor(o, 'prop')

//Object.getOwnPropertyDescriptor >> retorna o que essa propiedade é 
const produto = { nome: 'Caneca', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
  writable:false,
  configurable:false,
})
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
produto.nome= 'Outra coisa !!!'
console.log(produto)



// Object.freeze(produto);
// produto.nome = 'Outro nome';

// const caneca = { nome: produto.nome, preco: produto.preco };
// console.log(Object.keys(produto));

// const caneca = Object.assign({}, produto, { material: 'porcelana' })

// caneca.nome = 'Caneca de programador';
// caneca.preco = 1.9;

// console.log(produto)
// console.log(caneca)