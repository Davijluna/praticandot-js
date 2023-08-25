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

async function