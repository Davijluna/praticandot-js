// Getters e Setters
// para receber parametros as classes usam o construtor delas
const _velocidade = Symbol('velocidade');
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  acelerar() {
    if(this[_velocidade] >= 100) return;
      this[_velocidade]+= 1;
  }

  freiar() {
    if(this[_velocidade] <= 0) return
    this[_velocidade]-=1;
  }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i+= 1) {
  c1.acelerar();
}

c1.velocidade = 1500;

console.log(c1)