const fatorial = require('./fatorial')

describe('testes de carga da função fatorial', ()=>{
    test('Calcular número grande', () => {
        const start = Date.now();
        const result = fatorial(500000);
        const end = Date.now();
        const timeElapse = end - start;

        console.log(`tempo de execução: ${timeElapse}`)
        console.log(`${start} e ${end}`)

        expect(timeElapse).toBeLessThanOrEqual(1000)
    })
})