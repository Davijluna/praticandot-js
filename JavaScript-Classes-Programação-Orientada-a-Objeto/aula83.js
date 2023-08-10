// Métodos de instância e estâticos.

function teste() {
  console.log('Estou aqui')
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0
    teste()
  }

   // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }

  // Método de instância
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  static trocaPilha() {
    console.log('vou trocar!!!!')
  }
}

const controle2 = new ControleRemoto('LG')
const controle1 = new ControleRemoto('LG')

controle2.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1, controle2)
ControleRemoto.trocaPilha();

