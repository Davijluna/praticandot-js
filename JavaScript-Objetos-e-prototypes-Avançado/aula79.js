// Factory Functiosns + Prototypes.

// criando a factory functions e trabalhando com o proto dessa função.
// criando o prototype na minha própia função.
function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando`)
    },

    comer() {
      console.log(`${this.nome} está comer`)
    },

    beber() {
      console.log(`${this.nome} está beber`)
    }
  }

  return {
    nome,
    sobrenome
  };
}
const p1 = criaPessoa('Davi', 'Jesus de Luna');


// console.log(p1.)