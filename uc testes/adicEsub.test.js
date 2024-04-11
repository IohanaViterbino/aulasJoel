const adicSub = require("./adicEsub")

test('As operações que dão certo', () => {
    expect(adicSub(4,5,"+")).toBe(9);
    expect(adicSub(4,5,"-")).toBe(-1);
});

test('As operações que tem entrada de operações erradas', () => {
    expect(adicSub(4,5,"*")).toBe("Inválido, insira uma operação de adição ou subtração");
    expect(adicSub(4,5,"/")).toBe("Inválido, insira uma operação de adição ou subtração");
    expect(adicSub(4,5,"**")).toBe("Inválido, insira uma operação de adição ou subtração");
});

test('As operações que tem entrada de números erradas', () => {
    expect(adicSub("bd","ad","/")).toBe("Inválido, insira um número.");
});