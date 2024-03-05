
  {
    nome: "Davi",
    idade: 36,
    sexo: "Masculino"
  }
]

const jsonManipulado = JSON.stringify(testeJSON)
const desconverterJson = JSON.parse(jsonManipulado)
console.log(desconverterJson)