function Calculadora() { 
  // Criando os metodos da calculadora
  // METODO.
  this.display = document.querySelector('.display');
 // METODO.
  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      // adicionando as funções do clear, delete e do adiciona conta.
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del(el);
      if (el.classList.contains('btn-eq')) this.realizaConta(el);
    });
  };
 // METODO.
  this.addNumDisplay = el => this.display.value += el.innerText;
// ESTA PARTE LIMPA O DISPLAY DA CALCULADORA 
  this.clear = () => {
    this.display.value = '';
  }
 // METODO.
  this.inicia = () => {
     // AQUI ESTA CHAMANDO O METODO >> capturaCliques
    this.capturaCliques();
  };

}

const calculadora = new Calculadora();
calculadora.inicia();
