const volC = require('./volumeCubo');

test('As arestas do cubo são 4, então o volume é 64', () => {
    expect(volC(4)).toBe(64);
});

test('As arestas do cubo são 2.5, então o volume é 15.625', () => {
    expect(volC(2.5)).toBe(15.625);
});

test('As arestas do cubo são "A", então o volume é "Inválido, insira um número"', () => {
    expect(volC("A")).toBe("Inválido, insira um número");
    expect(volC(null)).toBe("Inválido, insira um número maior que zero");
});

test('As arestas do cubo são 0, então o volume é "Inválido, insira um número maior que zero"', () => {
    expect(volC(0)).toBe("Inválido, insira um número maior que zero"),
    expect(volC(-8)).toBe("Inválido, insira um número maior que zero");
});

