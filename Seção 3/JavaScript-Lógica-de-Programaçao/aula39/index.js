// ? função que gera um número aleatório de 0 á 50.

function random(min, max) {
  const r = Math.random()* (max - min) + min;
  return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = random(min, max)

while (rand !== 10) {
  rand = random(min, max)
  console.log(rand)
}
console.log("#################################")
// console.log(rand)

do {
  rand = random(min, max);
  console.log(rand);
} while(rand !== 10);

// todo: Não é muito recomendado, usar o "while" nesses caso,
// todo: pois já temos o for para essas tarefa
// todo: mas ele executa essa lógica de maneira igual ao for.

// const nome = "Luiz";
// let i = 0;

// while (i < nome.length) {
//   console.log(nome[i]);
//   i+= 1;
// }