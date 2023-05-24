function Calculadora() { 
  // Criando os metodos da calculadora
  // METODO.
  this.display = document.querySelector('.display');
 // METODO.
  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classLiet.contains('btn-num')) this.addNumDisplay(el);
    });
  };
 // METODO.
  this.addNumDisplay = el => this.display.value += el.innerText;
 // METODO.
  this.inicia = () => {
     // AQUI ESTA CHAMANDO O METODO >> capturaCliques
    this.capturaCliques();
  };

}

const calculadora = new Calculadora();
calculadora.inicia();
