// Polimorfismo
// Superclass.
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta  = conta;
  this.saldo = saldo;
}

// metodo
Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return
  }
  this.saldo -= valor
  this.verSaldo()
};

// metodo
Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};

// metodo
Conta.prototype.verSaldo = function() {
  // return this.saldo;
  console.log(`Ag/c: ${this.agencia}/${this.conta} |` + `Saldo: R$ ${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(111, 443, 10);
conta1.depositar(12)
conta1.depositar(10)
conta1.sacar(300)
// console.log(conta1)