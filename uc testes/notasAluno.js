function mediaNotas(nt1, nt2, nt3) {
    const media = (nt1 + nt2 + nt3)/ 3

    if (isNaN(nt1) || isNaN(nt2) || isNaN(nt3)){
        return "Números devem ser inseridos para o cálculo";

    }else if(nt1<=0 || nt2<=0 || nt3<=0){
        return "Números maiores que zero devem ser inseridos para o cálculo";

    }else if(media < 7){
        let ntFaltante = (7 - media) * 3;

        if(ntFaltante <= 10){
            return Number(ntFaltante.toFixed(2));
            
        } else {
            return "Nota impossível de recuperar. Ficou para recuperação.";
        }

    } else {
        return "As notas atingiram a meta.";

    }
}

module.exports = mediaNotas;