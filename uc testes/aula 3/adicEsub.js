function adicaoEsub(n1, n2, op) {
    if(isNaN(n1) || isNaN(n2)){
        return "Inválido, insira um número.";
    }

    if(op == "+"){
        let soma = n1 + n2
        return soma;
        
    } else if (op == "-"){
        let sub = n1 - n2
        return sub;
        
    } else {
        return "Inválido, insira uma operação de adição ou subtração";
    }
}

module.exports = adicaoEsub;