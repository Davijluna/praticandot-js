// Usando classes (Validando CPF)
const cpf = "358.484.248-45"

class ValidaCPF {
  constructor(cpfEnviando) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviando.replace(/\D+/g, '')
    });
  }


  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpflimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    return 'Cheguei Aqui'
  }
}
// ver para mais tarde.
const validacpf = new ValidaCPF(cpf)
console.log(validacpf.valida());