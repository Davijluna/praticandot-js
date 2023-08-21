class Person {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  retornaIdade() {
    console.log(`${nome}, ${idade}`);
  }
};

const p1 = new Person('Davi', 36)

console.log(p1);