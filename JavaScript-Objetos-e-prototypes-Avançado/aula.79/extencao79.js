// Objeto Map().

const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' },
]

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas)

// obter pessoa 2. caso ela não exista retorna undefined.
// console.log(novasPessoas.get(2))

// iterar no pessoa. ele retorna um array.
// for(const pessoa of novasPessoas) {
//   console.log(pessoa)
// }


// utilizando outro tipo de destructor muito comum em Python.

for (const [identifier, { id, nome }] of novasPessoas) {
  console.log(identifier, id, nome)
}