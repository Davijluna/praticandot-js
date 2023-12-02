const data = [
  { nome: "Davi", idade: 36 },
  { nome: "João", idade: 32 },
  { nome: "Maria", idade: 28 },
  { nome: "Marta", idade: 21 }
]

const showData = (users) => {
 users.forEach((user) => {
  console.log(`Olá ${user.idade}`)
 }) 
}

showData(data)