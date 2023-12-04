const data = [
  { nome: "Davi", idade: 36, avaliacao: false },
  { nome: "João", idade: 32, avaliacao: false },
  { nome: "Maria", idade: 28, avaliacao: false },
  { nome: "Marta", idade: 21, avaliacao: false }
]

const showData = (users) => {
 users.forEach((user) => {
  console.log(`Olá ${user.nome}`)
 }) 
}

showData(data)

let someShowData = data.some((user) => user.avaliacao)

console.log(someShowData);

data[0].avaliacao = true
console.log(data)

someShowData = data.some((user) => user.avaliacao)
console.log(someShowData)