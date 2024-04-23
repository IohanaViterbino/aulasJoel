function calcularDesc(primeiraCompra, tipoClinte, valorCompra) {
    if (valorCompra >= 500 || tipoClinte == "ouro") {
        return 15
    } else if(tipoClinte == "prata" || primeiraCompra == true || valorCompra >= 400){
        return 10
    } else if(tipoClinte == "bronze" || valorCompra >= 200){
        return 5
    } else {
        return 0
    }
}

module.exports = calcularDesc;