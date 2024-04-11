const caixa = require("./caixa")

test("caixa apresentando entradas corretas",()=>{
    expect(caixa(380)).toBe("Notas de 100: 3, Notas de 50: 1, Notas de 20: 1, Notas de 10: 1, ");
    expect(caixa(495)).toBe("Notas de 100: 4, Notas de 50: 1, Notas de 20: 2, Notas de 5: 1, ");
});

test("caixa apresentando entradas inválidas",()=>{
    expect(caixa(-380)).toBe("Inválido, insira um número válido positivo.");
    expect(caixa(0)).toBe("Inválido, insira um número válido positivo.");
    expect(caixa("adv")).toBe("Inválido, insira um número válido positivo.");
    expect(caixa(null)).toBe("Inválido, insira um número válido positivo.");
});