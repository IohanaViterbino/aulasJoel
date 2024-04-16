const lista = require("./listaNotas")

test('lista com notas válidas', () => {
    expect(lista([4, 8, 0, 6])).toBe(4.5);
    expect(lista([4, -3, 3])).toBe(1.33);
})

test('lista com notas inválidas', () => {
    expect(lista([4, 8, "a"])).toBe("A nota deve ser um número.");
    expect(lista([null])).toBe(0);
    expect(lista([])).toBe("O array de notas está vazio.");
})