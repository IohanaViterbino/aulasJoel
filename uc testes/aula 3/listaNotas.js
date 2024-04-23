function calcularMedia(array) {
    if (array.length === 0) {
        return "O array de notas está vazio.";
    }

    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        const nota = array[i];
        if (isNaN(nota)) {
            return "A nota deve ser um número.";
        }
        soma += nota;
    }

    const media = soma / array.length;
    return Number(media.toFixed(2));
}

module.exports = calcularMedia;
