// Fecth API (GET)

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

  xhr.addEventListener('load', () => {
    if(xhr.status >= 200 && xhr.status < 300) {
      obj.sucess(xhr.responseText);
    } else {
      obj.error({
        code: xhr.status,
        msg: xhr.status
      });
    }
  })
}

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if(tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
})

function carregaPagina(el) {
  const href = el.getAttribute('href')
  // console.log(href)
  resquest({
    method: 'GET',
    url: href,
    sucess(response) {
      carregaResultado(response);
    },
    error(errorText) {
      console.log(errorText)
    }
  })
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}

