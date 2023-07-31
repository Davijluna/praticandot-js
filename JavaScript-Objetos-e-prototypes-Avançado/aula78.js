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

// ////////////////////////////////

// Criando as SubClass para conta.
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this ,agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return
  }
  this.saldo -= valor
  this.verSaldo()
};

function CP(agencia, conta, saldo) {
  Conta.call(this ,agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP(12, 33, 0)
cp.depositar(10)
cp.sacar(10)
cp.sacar(1)

console.log(cp)

// Criando uma conta corrente.

// const contaCorrente = new ContaCorrente(222, 100, 0, 100)
// contaCorrente.depositar(10)
// contaCorrente.sacar(110)
// contaCorrente.sacar(1)

// console.log(contaCorrente)