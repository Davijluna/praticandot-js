// Usando classes (Validando CPF)
// const cpf = "358.484.248-45"

class ValidaCPF {
  constructor(cpfEnviando) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviando.replace(/\D+/g, '')
    });
  }

  éSequência() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCPF() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }
// Quando o metodo não possue a palavra this ele pode ser static.
// methodos static não têm acesso ao this da class.
  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for(let stringNumerica of cpfSemDigitos ) {
      total += reverso * Number(stringNumerica);
      console.log(typeof total);
      reverso -= 1;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.éSequência()) return false;
    this.geraNovoCPF();
    console.log(this.novoCPF)

    return this.novoCPF === this.cpfLimpo;
  }
}
// ver para mais tarde.
const validacpf = new ValidaCPF('358.484.248-45');
console.log(validacpf.valida());

if(validacpf.valida()) {
  console.log('CPF VALIDO ');
} 