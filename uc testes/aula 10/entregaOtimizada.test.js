const entrega = require('./EntregaOtimizada')

describe('teste unitário de funcionamento', () => {
    test('lista de enderecos', () => {
        const pontosDeExemplo = [
            {"lat": 40.7128, "lon": -74.0060}, // Nova York
            {"lat": 34.0522, "lon": -118.2437}, // Los Angeles
            {"lat": 51.5074, "lon": -0.1278}, // Londres
            {"lat": 48.8566, "lon": 2.3522}, // Paris
            {"lat": -33.8688, "lon": 151.2093}, // Sydney
            {"lat": -22.9068, "lon": -43.1729} // Rio de Janeiro
        ];
        const pontosResultado = [ '2086.89', '6508.59', '7083.42', '7190.53', '9730.24', '15554.55' ]

        expect(entrega(pontosDeExemplo)).toStrictEqual(pontosResultado) 
    })

    test('retorna "A lista está vazia." se a lista estiver vazia', () => {
        const listaVazia = [];

        expect(entrega(listaVazia)).toBe("A lista está vazia.");
    });
})