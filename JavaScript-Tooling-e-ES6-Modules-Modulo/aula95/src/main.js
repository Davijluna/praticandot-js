import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

// console.log('Cheguei aqui.')
(function() {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado')
  cpfGerado.innerHTML = gera.geraNovoCpf();
  // adicionando comentario
})();