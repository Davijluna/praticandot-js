function retornaFuncao(nome) {
  // const nome = 'Davi';
  return function() {
    return nome
  }
}

//  exemplo de closures > É A ABILIDADE QUE UMA FUNÇÃO TEM DE ACESSAR O SEU ESCOPO LEXICO.
// adicionando alteração de parametros para as funções

const funcao = retornaFuncao('Davi');
const funcao2 = retornaFuncao('joão');

console.log(funcao)

console.log(funcao(), funcao2())

