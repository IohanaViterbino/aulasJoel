const notas = require('./notasAluno');

test('Notas baixas', () => {
    expect(notas(4, 7, 3)).toBe(7);
    expect(notas(4, 3, 3)).toBe("Nota impossível de recuperar. Ficou para recuperação.");
})

test('Notas altas', () => {
    expect(notas(7, 7, 7)).toBe("As notas atingiram a meta.");
})

test('Notas números negativos ou zero', () => {
    expect(notas(-7, 7, -7)).toBe("Números maiores que zero devem ser inseridos para o cálculo");
    expect(notas(-7, 0, 7)).toBe("Números maiores que zero devem ser inseridos para o cálculo");
})

test('Entrada errada', () => {
    expect(notas('ik', 't', 'a')).toBe("Números devem ser inseridos para o cálculo");
})

test('Falte nota', () => {
    expect(notas(7)).toBe("Números devem ser inseridos para o cálculo");
    expect(notas()).toBe("Números devem ser inseridos para o cálculo");
})