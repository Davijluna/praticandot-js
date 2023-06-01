function Calculadora() { 

  // Criando os metodos da calculadora
  // METODO.
  this.display = document.querySelector('.display');

   // METODO.
 // AQUI ESTA CHAMANDO O METODO >> capturaCliques
 this.inicia = () =>  {
  this.capturaCliques();
  this.capturaEnter();
}

this.capturaEnter = () => {
  document.addEventListener('keyup', e => {
    if (e.key === 13) return;
    this.realizaConta();
  });
};

 // METODO.
  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      // adicionando as funções do clear, delete e do adiciona conta.
      if (el.classList.contains('btn-clear')) this.clear(); // ok
      if (el.classList.contains('btn-del')) this.del(el);
      if (el.classList.contains('btn-eq')) this.realizaConta(el);
    });
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value)

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  }
 // METODO.
  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus(); // Aqui mudamos o focu para o display da calculadora.
  } 
// ESTA PARTE LIMPA O DISPLAY DA CALCULADORA 
  this.clear = () => this.display.value = '';

  // ESTA PARTE DELETA NUMERO UM A UM.
  this.del = () => {
    this.display.value = this.display.value.slice(0, -1);

  }

}

const calculadora = new Calculadora();
calculadora.inicia();
