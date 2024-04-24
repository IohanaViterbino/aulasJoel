const produtos = require('./produtoModel')

produtos.getAllProdutos((error, results) => {
    if(error){
        console.error("Erro ao buscar produtos:", error);
        return;
    }
    console.log("Produtos encontrados:", results);
})

produtos.createProduct('Pastel de Carne', '8,50',(err, resul) => {
    if(err){
            console.error("Erro ao inserir produto:", err);
            return;
        }
        console.log("Produto inserido:", resul);
})

// produtos.getProdutoById(3, (err, resul) => {
//     if(err){
//         console.error("Erro ao buscar produto:", err);
//         return;
//     }
//     console.log("Produto encontrado:", resul);
//     console.log(resul[0].nome)
// })

// produtos.updateProduct(6, 'Pastel de Vento', '2,50', (err, resul) => {
//     if(err){
//         console.error("Erro ao atualizar produto:", err);
//         return;
//     }
//     console.log("Produto atualizado:", resul);
// })

// produtos.deleteProduct(11, (err, resul) => {
//     if(err){
//         console.error("Erro ao excluir produto:", err);
//         return;
//     }
//     console.log("Produto excluido:", resul);
// })

produtos.deleteAllProduct((err, resul) => {
    if(err){
        console.error("Erro ao excluir produtos:", err);
        return;
    }
    console.log("Produtos excluidos:", resul);
})