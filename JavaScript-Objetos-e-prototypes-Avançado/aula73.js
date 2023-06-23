// Métodos úteis para objetos
// utilizando spred operation
// utilizando Object.assign
// copiando um objeto no outro
// utilizando Object.key
// utilizando Object.freeze

const produto = { nome: 'Caneca', preco: 1.8 };
Object.freeze(produto);
produto.nome = 'Outro nome';
console.log(produto)


// const caneca = { nome: produto.nome, preco: produto.preco };
// console.log(Object.keys(produto));

// const caneca = Object.assign({}, produto, { material: 'porcelana' })

// caneca.nome = 'Caneca de programador';
// caneca.preco = 1.9;

// console.log(produto)
// console.log(caneca)