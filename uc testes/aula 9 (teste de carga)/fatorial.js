function fatorialCalc(num) {

    if (num === 0 || num === 1){
        return 1;
    } else{
        return num * fatorialCalc(num-1);
    }
}

function fatorialCAlcFor(num) {
    let fat = 1;

    for (let i = 2; i < num; i++) {
        fat *= i;
    }

    return fat
}

module.exports = fatorialCAlcFor;