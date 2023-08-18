// CLASSES 

class Instrumento {
  constructor(nome, categoria,) {
    this.nome = nome;
    this.categoria = categoria;
  }

  nameIntrument() {
    console.log(this.nome, 'categoria', this.categoria)
  }
}

const v1 = new Instrumento('violino', 'cordas');

console.log(v1.nameIntrument());


