/* 1 ) ​Crie uma classe  para gerenciar uma conta bancária, 
não é necessário se preocuparcom o número da conta, a classe irá 
permitir fazer saque, depósito e exibir o saldoatual.
Classe: Conta
Atributos: saldo 
Métodos: saque, deposito e exibirSaldo.*/


class Conta {
    constructor() {
        this.saldo = 0;
    }

    saque(valorSaque) {
        this.saldo = this.saldo - valorSaque;
    }

    deposito(valorDeposito) {
        this.saldo = this.saldo + valorDeposito;
    }

    exibirSaldo() {
        console.log(`Seu saldo é: ${this.saldo}`)
    }
}

const conta  = new Conta();
conta.deposito(100);
conta.saque(30);
conta.exibirSaldo();