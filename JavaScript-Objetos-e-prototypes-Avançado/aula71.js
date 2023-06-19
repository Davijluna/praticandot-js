// defineProperty -> define um
// defineProperties -> define varios

// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;

//   Object.defineProperty(this, 'estoque', {
//     enumerable: true, // mostra a chave
//     value: estoque, // aponta de onde vem o valor para exibir.
//     writable: false, // diz se pode alterar o valor que foi exibido.
//     configurable: false, // se pode configurar a chave.
//   });
// }


function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // aponta de onde vem o valor para exibir.
    writable: false, // diz se pode alterar o valor que foi exibido.
    configurable: false, // se pode configurar a chave.
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // aponta de onde vem o valor para exibir.
      writable: true, // diz se pode alterar o valor que foi exibido.
      configurable: true // se pode configurar a chave.
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // aponta de onde vem o valor para exibir.
      writable: true, // diz se pode alterar o valor que foi exibido.
      configurable: true // se pode configurar a chave.
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
// delete p1.estoque;
console.log(p1);

for(let chave in p1) {
  console.log(chave);
}