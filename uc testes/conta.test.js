const Conta = require("./conta");

describe('Testes do método contrutor', ()=>{
    let conta;

    test('Verificar se criou o objeto e valor de saldo positivo', ()=>{
        conta = new Conta("Iohana", 30);
        expect(conta._titular).toBe("Iohana");
        expect(conta.getSaldo()).toBe(30);
    });

    test('Verificar se criou a conta com saldo negativo', ()=>{
        conta = new Conta("Alan", -15);
        expect(conta._titular).toBe("Alan");
        expect(conta.getSaldo()).toBe(0);
    });

    test('Verificar se criou a conta com saldo zerado', ()=>{
        conta = new Conta("Flávio");
        expect(conta._titular).toBe("Flávio");
        expect(conta.getSaldo()).toBe(0);
    });

});


describe('Testes do método depositar', ()=>{
    let conta;

    beforeEach(()=>{
        conta = new Conta("Iohana", 300);
    });
    
    test('deposito posiivo', ()=>{
        conta.depositar(200)

        expect(conta.getSaldo()).toBe(500)
    });
    
    test('deposito valor 0', ()=>{
        //a execução do expect leva o throw
        expect(()=>conta.depositar(0)).toThrow("O valor do depósito deve ser um número válido positivo.")
    });
    
    test('deposito valor negativo', ()=>{
        //a execução do expect leva o throw
        expect(()=>conta.depositar(-9)).toThrow("O valor do depósito deve ser um número válido positivo.")
    });
    
    test('deposito posiivo', ()=>{
        conta.depositar(20325048480.50)

        expect(conta.getSaldo()).toBe(20325048780.50)
    });
})

describe('Testes do método saque', ()=>{
    let conta;

    beforeEach(()=>{
        conta = new Conta("Alan", 350);
    });

    test('saque com valor válido', ()=>{
        conta.sacar(200)
        expect(conta.getSaldo()).toBe(150)
    });

    test('saque total', ()=>{
        conta.sacar(350)
        expect(conta.getSaldo()).toBe(0)
    });
    
    test('saque com valor 0', ()=>{
        expect(()=>conta.sacar(0)).toThrow("O valor do saque deve ser um número válido positivo.")
    });
    
    test('saque com valor negativo', ()=>{
        expect(()=>conta.sacar(-9)).toThrow("O valor do saque deve ser um número válido positivo.")
    });
    
    test('saque com valor grande', ()=>{
        expect(()=>conta.sacar(20325048480.50)).toThrow("Saldo insuficiente.")
    });

})