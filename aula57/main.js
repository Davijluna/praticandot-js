// Calculadora com factory function

function criaCalculadora() {
  // factory function é basicamente uma função que retorna um Objeto
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    clearDisplay() {
      this.display.value = '';
    },



    inicia() {
      this.cliqueBotoes();
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes(){
      // this -> calculadora
      document.addEventListener('click', (e) => {
         const el = e.target;
        console.log(this);
         if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
         }

         if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
         }

         if(el.classList.contains('btn-del')) {
          this.apagaUm();
         }
      });
    },
    btnParaDisplay(valor) {
      this.display.value += valor
    }
  };
}

 const calculadora = criaCalculadora();
 calculadora.inicia();
