// Calculadora com factory function

// funcão que engloba todo o sinstema da calculadora.
function criaCalculadora() {
  // factory function é basicamente uma função que retorna um Objeto
  return {

    // Objeto que a função acessa
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    clearDisplay() {
      this.display.value = '';
    },


    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }
        this.display.value = conta;
      } catch(e) {
        alert('Conta inválida');
        return;
      }
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

         if(el.classList.contains('btn-eq')) {
          this.realizaConta();
         }
         
        //  AQUI O FIX
         this.display.focus();
      });
    },
    btnParaDisplay(valor) {
      this.display.value += valor
    }
  };
}

 const calculadora = criaCalculadora();
 calculadora.inicia();
