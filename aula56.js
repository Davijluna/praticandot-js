// FUNÇÕES FÁBRICAS AS (FACTORY FUNCTIONS);

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala: function(assunto= 'falando sobre NADA !!!') {
      return `${this.nome} está ${assunto}.`;
    },
    altura: altura,
    peso: peso,
    // Getter:
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },
    // nessa parte usamos o set para adicionar imformaçôes a função nomeCompleto.
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor)
    },
    // na linha 12 usamos a palavra "get" para fazer o imc "fingir" que é um atributo do objeto.
    // Getter:
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Davi', 'Jesus', 1.70, 80);
// Agora na linha 24 e 22 nos retiramos os "()" do imc e agora ele fica fingindo ser um atributo do objeto
console.log(p1.imc)
const p2 = criaPessoa('Pamela', 'Roustin', 1.60, 42)
p2.nomeCompleto = 'Giulia Silva Torres';
// console.log(p2.imc)
console.log(p2.nomeCompleto)
console.log(p1.sobrenome);
console.log(p2.fala());