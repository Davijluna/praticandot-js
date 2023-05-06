function retornaFuncao(nome) {
  // const nome = 'Davi';
  return function() {
    return nome
  }
}

//  exemplo de closures
// adicionando alteração de parametros para as funções

const funcao = retornaFuncao('Davi');
const funcao2 = retornaFuncao('joão');

console.log(funcao)

console.log(funcao(), funcao2())

