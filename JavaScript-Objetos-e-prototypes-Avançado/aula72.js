// defineProperty -> Getter e Setters é uma maneira de proteger as propiedades.
// 

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // aponta de onde vem o valor para exibir.
    writable: false, // diz se pode alterar o valor que foi exibido.
    configurable: false, // se pode configurar a chave.
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);