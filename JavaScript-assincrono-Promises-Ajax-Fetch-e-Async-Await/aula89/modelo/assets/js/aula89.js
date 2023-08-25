// XMLHttpResquest (GET) + Promises
// CÓDIGO HTTP.
/**
wikipédia
https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP

MDN
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
 */

const resquest = obj => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener('load', (e) => {

  })
}

