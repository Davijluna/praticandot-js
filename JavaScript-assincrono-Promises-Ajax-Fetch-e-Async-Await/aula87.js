// Métodos úteis para Promises.


function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(false);
    setTimeout(() => {
      resolve(msg);
    }, tempo)
  });
}

const promise = [
  'primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 10000),
  'outro valor'
];

Promise.all(promise)
.then(function(valor) {
  console.log(valor)
}).catch(function(e) {
  console.log(e, 'foi mostrado um erro')
});

// METODOS PASSADO EM AULA
// Promise.all Promise.race Promise.resolve Promese.reject