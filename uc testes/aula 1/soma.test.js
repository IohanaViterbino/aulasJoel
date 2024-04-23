const sum = require('./soma');

test('soma é 1 + 2 é igual 3', () => {
  expect(sum(1, 3)).toBe(4);
});