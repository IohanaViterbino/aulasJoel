const produtos = require('./produtos')

beforeEach(async () => {
    await new Promise((resolve, reject) => {
        produtos.deleteAllProducts((error, result) => {
            if (error) reject(error);
            resolve();
        });
    });
    await new Promise((resolve, reject) => {
        produtos.createProduct('Pamonha','2.50', (error, result) => {
            if (error) reject(error);s
            resolve();
        });
        produtos.createProduct('Pamonha','2.50', (error, result) => {
            if (error) reject(error);
            resolve();
        });
    });
});

test('Adicionando produto ao banco', done => {
    produtos.createProduct('Pastel de Carne', '8,50',(err, resul) => {
        expect(err).toBeNull();
        expect(resul.affectedRows).toBe(1);
        done();
    })
})

test('Pegue todos os produtos', done => {
    produtos.getAllProdutos((err, resul) => {
        expect(err).toBeNull();
        expect(resul.length).toBeGreaterThan(0);
        done();
    })
})

test('Pegue um produto', done => {
    produtos.getProdutoById(3, (err, resul) => {
        expect(err).toBeNull();
        expect(resul[0].nome).toBe('Farinha');
        done();
    })
})

test('atualize um produto', done => {
    produtos.updateProduct(4, 'Pastel de Frango', '8,75', (err, resul) => {
        expect(err).toBeNull();
        expect(resul.affectedRows).toBe(1);
        done();
    })
})

test('deletando um produto', done => {
    produtos.deleteProduct(4, (err, resul) => {
        expect(err).toBeNull();
        expect(resul.affectedRows).toBe(1);
        done();
    })
})

test('deletando toda a base', done => {
    produtos.deleteAllProduct((err, resul) => {
        expect(err).toBeNull();
        expect(resul.serverStatus).toBe(34);
        done();
    })
})

describe('Ttstes de carga', () => {

})