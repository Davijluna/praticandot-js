// FUNÇÕES FÁBRICAS AS (FACTORY FUNCTIONS);

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala: function(assunto) {
      return `${this.nome} está ${assunto}.`;
    },
    altura: altura,
    peso: peso,
    imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Davi', 'Jesus', 1.70, 80);
console.log(p1.imc())
const p2 = criaPessoa('Pamela', 'Roustin', 1.60, 42)
console.log(p2.imc())
console.log(p2.fala('falando sobre JS'));