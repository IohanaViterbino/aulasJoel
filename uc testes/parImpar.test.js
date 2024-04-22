const parImpar = require('./parImpar');

test('verifica se é par ou impar positivo', ()=>{
    expect(parImpar(2)).toBe("par positivo")
    expect(parImpar(3)).toBe("impar positivo")
})

test('verifica se é par ou impar negativo', ()=>{
    expect(parImpar(-2)).toBe("par negativo")
    expect(parImpar(-3)).toBe("impar negativo")
})

test('verifica 0 ou não válido', ()=>{
    expect(parImpar(0)).toBe("zero")
    expect(parImpar("nume")).toBe("números, por favor")
})