function volumeCubo(a) {
    if(isNaN(a)){
        return "Inválido, insira um número";
    } else if(a > 0){
        return a**3;
    } else {
        return "Inválido, insira um número maior que zero";
    }
}

module.exports = volumeCubo;