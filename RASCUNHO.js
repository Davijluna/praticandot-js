// CLASSES 
class Person {
  constructor(nome, profissão) {
    this.nome = nome;
    this.profissão = profissão;
  }

  falaProfissao() {
    console.log(`${this.nome} tèm a profissão de ${this.profissão}`)
  }
}

class Davi extends Person {
  constructor(nome, profissão) {
    super(nome, profissão);
  }
// nesta parte a função fica sobre escrita.
  falaProfissao() {
    console.log(`${this.nome} tèm a profissão de ${this.profissão} FullStack`)
  }
}

const funcionario = new Person('Colega', 'Progamador')
const davi = new Davi('Davi', 'Programador');

funcionario.falaProfissao()
davi.falaProfissao()

