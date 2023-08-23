// Promises
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //  console.log(msg);
      resolve(msg);
    }, tempo)
  });
}

esperaAi('frase 1', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('frase 2', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return esperaAi('frase 3', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  }).then(() => {
    console.log('ultimo a ser exibido.')
  })
  .catch();
// esperaAi('frase2', rand(1, 3))
// esperaAi('frase3', rand(1, 3))