// Nessa parte aprende sobre o arguments que guarda os valores da funcao quando ela não tem os parametros

// Mas detalhe esse arguments só funciona com funções com nome function com function com arrowFunction não funciona.

function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);