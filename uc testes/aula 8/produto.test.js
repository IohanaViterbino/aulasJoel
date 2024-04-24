const produtos = require('./produtoModel')

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