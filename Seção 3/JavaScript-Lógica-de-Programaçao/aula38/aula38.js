// exercicio com NodeList(Browser).
// MUDAR DE FORMA DINÂMICA A COR DE FUNDO E DO TEXTO.

// const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

// const estilosBody = getComputedStyle(document.body);
// const backgroundColorBody = estilosBody.backgroundColor

// console.log(backgroundColorBody)
for(let i in ps) {
  ps[i].style.backgroundColor = '#0fff'
  ps[i].style.color = '#fff'
  // ps.backgroundColor = 
};