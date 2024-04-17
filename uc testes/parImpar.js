function parOuImpar(num) {
    let saida;

    if(isNaN(num)){
        return "números, por favor"
    }

    if(num > 0){
        //par e impar positivo
        if(num%2==0){
            saida = "par positivo"
        } else {
            saida = "impar positivo"

        }
    } else if(num < 0){
        //par e impar negativo
        if(num%2==0){
            saida = "par positivo"
        } else {
            saida = "impar positivo"

        }
    } else {
        saida = "zero"
    }

    return saida
}

module.exports = parOuImpar;