// For of - Estrutura de repetição.

const nome = 'Luiz Otávio';
//  DEMONSTRANDO OS DIFERENTER TIPODE FOR OBS: FALTA O FOREACH

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// For clássico.
// for(let i = 0; i < nome.length; i += 1) {
//   console.log(nome[i])
// }

// for in.
// for(let valor in nome) {
//   console.log(nome[valor])
// }

for(let valor of nome) {
  if( valor === 'O') {
    console.log('Tem letra O')
  }
    console.log('Não têm')
}