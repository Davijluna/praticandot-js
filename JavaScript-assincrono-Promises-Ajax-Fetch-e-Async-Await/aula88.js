// Async / Await

// link da documentação
/*
async
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/async_function

await
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await
 */

function rand(min=0, max=3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('CAI NO ERRO');
      return;
    }
      resolve(msg.toLocaleUpperCase() +' - Passei na Promise');
      return;
    }, tempo)
  });
}

// esperaAi('Fase 1', rand())
// .then(valor => {
//   console.log(valor);
//   return esperaAi('Fase 2', rand())
// })
// .then(fase => {
//   console.log(fase);
//   return esperaAi('Fase 3', rand());
// })
// .then(fase => {
//   console.log('Termina na fase: ',fase);
// })
// .catch(e => console.log(e));

// console.log(rand())

async function executar() {
  try {

    const fase1 = await esperaAi('Fase 1', rand())
    console.log(fase1);
  
    const fase2 = await esperaAi('Fase 2', rand())
    console.log(fase2);
  
    const fase3 = await esperaAi('Fase 3', rand())
    console.log(fase3);
  
    console.log('Termina na fase: ', fase3);
  } catch(e) {
    console.log(e)
  }
}

// os três estados de uma Promise
/**
 * Pending (Pendente): Quando uma promise é criada, ela começa no estado "pendente". Isso significa que a operação associada à promise ainda não foi concluída.

Fulfilled (Realizada): Uma promise passa para o estado "realizada" quando a operação associada a ela é bem-sucedida. Isso significa que o valor prometido está disponível, e a promise "entrega" esse valor para qualquer código que estiver aguardando.

Rejected (Rejeitada): Uma promise entra no estado "rejeitada" quando a operação associada a ela falha de alguma forma. Isso pode ser devido a um erro lançado durante a execução da operação. Quando uma promise é rejeitada, ela fornece um motivo (geralmente um objeto de erro) que descreve a razão da rejeição.
 */
executar();