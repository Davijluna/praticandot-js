// Exercicio com reduce

const data = [
  {nome: "Maria", idade: "36", salario: 2500},
  {nome: "Otávio", idade: "36", salario: 3000},
  {nome: "Davi", idade: "36", salario: 5000},
]

const sallariesSum = data.reduce((totalSallary, user) => (totalSallary += user.salario), 0);

console.log(sallariesSum)