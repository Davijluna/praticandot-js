// Factory Functiosns + Prototypes.

// criando a factory functions e trabalhando com o proto dessa função.
// criando o prototype na minha própia função.
// COMPOSIÇÃO >> 

const falar = {
  falar() {
    console.log(`${this.nome} está falando`)
  },
};

const comer = {
    comer() {
      console.log(`${this.nome} está comer`)
  },
}

const beber = {
    beber() {
      console.log(`${this.nome} está beber`)
  }
}

// Aqui com Object.assign
const pessoaPrototype = Object.assign({}, falar, comer, beber);

// Aqui com spreedOperator.
// const pessoaPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {
// linkando o objeto com o prototype.
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}
const p1 = criaPessoa('Davi', 'Jesus de Luna');

// console.log(p1.)