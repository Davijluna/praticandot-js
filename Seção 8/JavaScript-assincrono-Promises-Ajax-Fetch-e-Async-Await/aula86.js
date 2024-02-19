// Promises
// Documentação usada 
// Math.random.
/*

 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
// Math.floor.
/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
 */
// then.
/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 */
//  catch.
/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
 */
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE');
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
    return esperaAi( 11111, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  }).then(() => {
    console.log('ultimo a ser exibido.')
  })
  .catch(e => {
    console.log('ERROR', e)
  });

  console.log('fim')
// esperaAi('frase2', rand(1, 3))
// esperaAi('frase3', rand(1, 3))