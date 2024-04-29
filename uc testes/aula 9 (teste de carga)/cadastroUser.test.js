const cad = require('./cadastroUser')

describe('testes de carga do banco fake', () => {
    test('cadastro de 1000 registros no banco', () => {
        const numberUser = 6000000;
        const db = [];
        const start = Date.now();
        for(let i = 0; i < numberUser; i++){
            const user = cad();
            db.push(user)
        }
        const end = Date.now();
        const timeElapse = end - start

        expect(timeElapse).toBeLessThanOrEqual(1000);
        
        console.log(`tempo de execução: ${timeElapse}`)
        console.log(`${start} e ${end}`)
    })
})