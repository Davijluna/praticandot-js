// defineProperty -> Getter e Setters é uma maneira de proteger as propiedades.
// 

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: false, // se pode configurar a chave.
    get: function() {
      return estoquePrivado;
    },
    set: function(valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Você descreveu algo que não é do tipo number');
      }
      estoquePrivado = valor
    }
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('coisa.', '');
      nome= valor
    }
  };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.'
console.log(p2.nome)

// const p1 = new Produto('Camiseta', 20, 3);
// // console.log(p1);
// p1.estoque = '500';
// console.log(p1.estoque)

// exemplo sem new Error
// set: function(valor) {
//   if (typeof valor !== 'number') {
//     console.log('Certo !!!')
//     return;
//   }
//   estoquePrivado = valor
// }



// retiramos o value e o writable pois o proprio getter e setters já trabalharam da mesma forma.