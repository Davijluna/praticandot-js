// Herança ...

// Produto -> aumento,desconto
// Camiseta = cor, caneca = material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
}

// camiseta têm uma propiedade a mais que produto.
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

// Aqui estamos linkando os prototypes da camiseta com o produto.
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// sobrescrevendo o aumento para porcentagem
Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 10))
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  // this.estoque = estoque;     tiramos o estoque para criamos na função o estoque com getter e setter.
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  })
}

// Aqui estamos linkando os prototypes da caneca com o produto.
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function(quantia) {
  this.preco -= quantia;
}


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca de Programador', 10, 'Porcelana', 10)
// camiseta.aumento(100)
caneca.aumento(1000)
console.log(produto);
console.log(camiseta);
console.log(caneca);