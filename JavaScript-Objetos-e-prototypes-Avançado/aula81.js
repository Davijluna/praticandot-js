// Getters e Setters
// para receber parametros as classes usam o construtor delas
const _velocidade = Symbol('velocidade');
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }
// o set precisa ter um parâmetro para receber.
  set velocidade(valor) {
    console.log('Setter')
    if(typeof valor != 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    console.log('Getter')
    return this[_velocidade];
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

c1.velocidade = 10;
c1.velocidade = 10;

console.log(c1.velocidade)