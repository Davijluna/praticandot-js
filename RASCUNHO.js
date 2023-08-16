// CLASSES 
class Personagen {
  constructor(nome, type, arma, vida) {
    this.nome = nome;
    this.type = type;
    this.arma = arma;
    this.vida = vida;
  }

  static chuva() {
    console.log('Molhado')
  }

  ataque() {
    if(this.vida > 2) {
     this.vida-= 2;
     console.log('vida :', typeof this.vida)
    } if(this.vida == 2) {
      console.log('Corra você precisa correr');
    }
    if(this.vida < 2) {
      console.log('você perdeu')
    }
  }
}

const Heroi = new Personagen('Olavo', 'Guerreiro', 2, 10, 'seco')
const Campones = new Personagen('Piedro', 'Lavrador', 1, 1, 'seco')

Heroi.ataque()
Heroi.ataque()
Heroi.ataque()

Personagen.chuva()


console.log(Heroi)
console.log(Campones)
