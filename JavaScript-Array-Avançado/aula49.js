// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
  console.log('Oie');
}

// First-class objects (Objetos de primeira classe)

const souUmDado = function () {
  console.log('Sou um dado.')
};
souUmDado();

//Arrow function

const functionArrow = () => {
  console.log('Sou uma arrow function');
};

functionArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
};
obj.falar();