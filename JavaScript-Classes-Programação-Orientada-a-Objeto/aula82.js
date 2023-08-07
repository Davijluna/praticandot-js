// Hetança com classes.

class DispositoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(this.nome + 'Já ligado');
    }
    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
      console.log(this.nome + 'Já Desligado');
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositoEletronico {
  // neta parte só de chamar o super nós já estamos extendendo o nome e o ligado com o booleano
  constructor(nome, cor, modelo) {
    super(nome);
    
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone('Samsung', 'preto', 'Galaxy S10');

console.log(s1)

// const d1 = new DispositoEletronico('Smartphone');
// d1.ligar();
// d1.ligar();
// d1.desligar()
// console.log(d1)