// ** Escrevendo e lendo arquivo

const objeto = [
  {
    nome: 'Davi',
    sobrenome: 'Jesus de Luna',
    idade: 36,
    sexo: 'M'
  }
]


const json = JSON.stringify(objeto)
const dados = JSON.parse(json)

console.log(typeof objeto); // ** continua como objeto

console.log(dados, 'convertido'); // ** convertemos o JSON para objeto novamente.
console.log(typeof json); // ** o objeto está em JSON