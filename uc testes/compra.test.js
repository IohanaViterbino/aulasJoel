const desconto = require('./compra')

describe('Função de calcular descontos', () =>{
    test('descontos de 15', ()=>{
        expect(desconto(false, "ouro", 500)).toBe(15)
        expect(desconto(false, "ouro", 100)).toBe(15)
        expect(desconto(true, "bronze", 900)).toBe(15)
    })
    
    test('descontos de 10', ()=>{
        expect(desconto(true, "prata", 400)).toBe(10)
        expect(desconto(false, "bronze", 450)).toBe(10)
    })
    
    test('descontos de 5', ()=>{
        expect(desconto(false, "bronze", 200)).toBe(5)
        expect(desconto(false, "null", 250)).toBe(5)
    })
    
    test('descontos de 0', ()=>{
        expect(desconto(false, "null", 100)).toBe(0)
    })
})