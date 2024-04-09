//teste unitário

//1- estabelecer a função para teste
function soma(n1, n2) {
    return n1 + n2;
}

module.exports = soma;

/*
//asserções soma
function verificarSomaUmMaisUm(){
    const resultado = soma(1,1);
    const esperado = 2;
    
    if (resultado === esperado){
        console.log("teste 1 passou")
    } else {
        console.log(`Erro no teste 1. Resultado ${resultado}, Esperado ${esperado}`)
    }
}

function verificarSomaMenosUmMaisUm(){
    const resultado = soma(-1,"1");
    const esperado = 0;
    
    if (resultado === esperado){
        console.log("teste 2 passou")
    } else {
        console.log(`Erro no teste 2. Resultado ${resultado}, Esperado ${esperado}`)
    }
}

function verificarSomaZeroMaisZero(){
    const resultado = soma('0',0);
    const esperado = 0;
    
    if (resultado === esperado){
        console.log("teste 3 passou")
    } else {
        console.log(`Erro no teste 3. Resultado ${resultado}, Esperado ${esperado}`)
    }
}

verificarSomaUmMaisUm();
verificarSomaMenosUmMaisUm();
verificarSomaZeroMaisZero();


function maiorNumero(n1, n2, n3){
    if (n1 >= n2 && n1 >= n3) {
        return n1;
    } else if (n2 >= n1 && n2 >= n3) {
        return n2;
    } else {
        return n3;
    }
}

function verificarTodosNumerosIguais(){
    const resultado = maiorNumero(1,1,1);
    const esperado = 1;
    
    if (resultado === esperado){
        console.log("teste 4 passou")
    } else {
        console.log(`Erro no teste 4. Resultado ${resultado}, Esperado ${esperado}`)
    }
}

function verificarTodosNumerosDiferentes(){
    const resultado = maiorNumero("1",2.9,0.03);
    const esperado = 2.9;
    
    if (resultado === esperado){
        console.log("teste 5 passou")
    } else {
        console.log(`Erro no teste 5. Resultado ${resultado}, Esperado ${esperado}`)
    }
}

function verificarAlgunsNumerosDiferentes(){
    const resultado = maiorNumero(3,3,1);
    const esperado = 3
;
    
    if (resultado === esperado){
        console.log("teste 6 passou")
    } else {
        console.log(`Erro no teste 6. Resultado ${resultado}, Esperado ${esperado}`)
    }
}

function verificarAlgunsNumerosDiferentes2(){
    const resultado = maiorNumero(9,10,8);
    const esperado = 10;
    
    if (resultado === esperado){
        console.log("teste 7 passou")
    } else {
        console.log(`Erro no teste 7. Resultado ${resultado}, Esperado ${esperado}`)
    }
}

verificarTodosNumerosIguais();
verificarTodosNumerosDiferentes();
verificarAlgunsNumerosDiferentes();
verificarAlgunsNumerosDiferentes2();
*/