// Métodos úteis para objetos
// utilizando spred operation
// utilizando Object.assign
// copiando um objeto no outro
// utilizando Object.key
// utilizando Object.freeze
// Object.getOwnPropertyDescriptor(o, 'prop')
//Object.getOwnPropertyDescriptor >> retorna o que essa propiedade é 
// const aluno = { nome:'Ana', idade: 14};



// const copia = {
//   ...aluno,
//   sobreNome: 'tals',
//   profissão: 'tals'
// };

// // console.log(aluno, copia);

// copia.nome = 'Davi';

// console.log( 'Este é o aluno >>>>',aluno, '   está é a copia >>>', copia);


// utilizando Object.values
// utilizando Object.entries
// para obter os dois resultados
// com esse Object.value nos obtemos os valores ao invés das chaves que era quando tinhamos os no Object.keys 

// const produto = { nome: 'Caneca', preco: 1.8 };
// console.log(Object.keys(produto))
// console.log(Object.values(produto))


// Object.defineProperty(produto, 'nome', {
//   writable:false,
//   configurable:false,
// })
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// produto.nome= 'Outra coisa !!!'

// Object.freeze(produto);
// produto.nome = 'Outro nome';

// const caneca = { nome: produto.nome, preco: produto.preco };
// console.log(Object.keys(produto));

// const caneca = Object.assign({}, produto, { material: 'porcelana' })

// caneca.nome = 'Caneca de programador';
// caneca.preco = 1.9;

// console.log(produto)
// console.log(caneca)

const produto ={ nome: 'caneca', preco: 1.8 };
const copia = Object.assign({}, produto,  { nome: 'prato', preco: 2.9 } )

console.log(produto)
podemos retirar o let que funciona da mesma forma.
for(let [chave, values] of Object.entries(copia)) {
  console.log(chave, values)
}

// mais uma forma de desestruturação usando  "[0] e [1] etc."
for(let valor of Object.entries(copia)) {
  console.log(valor[0], valor[1])
}