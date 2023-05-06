function retornaFuncao() {
  const nome = 'Davi';
  return function() {
    return nome
  }
}

//  exemplo de closures

const funcao = retornaFuncao();

console.log(funcao)