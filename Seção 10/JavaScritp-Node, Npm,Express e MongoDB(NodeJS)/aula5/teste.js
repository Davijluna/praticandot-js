// const objeto = [
//   {
//     nome: 'Davi',
//     idade: 36,
//     sexo: 'Masculino'
//   }
// ]

// const convertido = JSON.stringify(objeto);
// const teste = JSON.parse(convertido)

// // console.log(convertido)
// console.log(teste)

const testeJSON = [
  {
     nome: "Davi",
    idade: 36,
     sexo: "Masculino"
  }
]

const j = [{"nome":"Davi","idade":36,"sexo":"Masculino"}]

// console.log(typeof j)
// const jsonManipulado = JSON.stringify(testeJSON)
const desconverterJson = JSON.stringify(j)
console.log(desconverterJson)
// console.log(typeof testeJSON, 'está constante já é um objeto !!!!')
// console.log(typeof jsonManipulado, 'trasnforma uma string em objeto')
// console.log(typeof desconverterJson, 'transforma em objeto')

// try {
//   const convertido = JSON.parse(testeJSON);
//   console.log(convertido)
// } catch(error) {
//   console.log('Aqui teve um erro', error)
// }
