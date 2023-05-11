// Calculadora com factory function

function criaCalculadora() {
  // factory function é basicamente uma função que retorna um Objeto
  return {
    display: document.querySelector('.display'),



    inicia() {
      this.cliqueBotoes();
    },

    cliqueBotoes(){
      // this -> calculadora
      document.addEventListener('click', function(e) {
         const el = e.target;
        console.log(this);
         if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
         }
      }.bind(this));
    },
    btnParaDisplay(valor) {
      this.display.value += valor
    }
  };
}

 const calculadora = criaCalculadora();
 calculadora.inicia();
