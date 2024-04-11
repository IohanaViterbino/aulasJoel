function caixaEletronico(saque) {
    if(isNaN(saque) || saque <= 0){
        return "Inválido, insira um número válido positivo.";
    }

    let stringSaida = "";
    const notas = [100, 50, 20, 10, 5, 2];
    let qtdNotas = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        if (saque >= nota) {
            qtdNotas[i] = Math.floor(saque / nota);
            saque %= nota;
        }
    }

    qtdNotas.forEach((nota, i)=>{
        if (nota > 0) {
            stringSaida += `Notas de ${notas[i]}: ${nota}, `;            
        }
    })

    return stringSaida;
}

module.exports = caixaEletronico;
