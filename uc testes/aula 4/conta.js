class Conta {
    constructor(titular, saldoI=0) {
        this._titular = titular;
        this._saldo = saldoI;
    }

    getSaldo() {
        return this._saldo;
    }

    depositar(valor){
        if(isNaN(valor) || valor <= 0){
            throw new Error( "O valor do depósito deve ser um número válido positivo.")
        }

        this._saldo += valor;

    }

    sacar(valor){
        if(isNaN(valor) || valor <= 0){
            throw new Error( "O valor do saque deve ser um número válido positivo.")
        }

        if(this._saldo < valor){
            throw new Error( "Saldo insuficiente.")
        }

        this._saldo -= valor;

    }
}

module.exports = Conta;