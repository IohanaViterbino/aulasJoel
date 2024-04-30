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

describe('teste de carga', () => {
    test('Ordenar uma lista maior', () => {
        const start = Date.now();
        const result = entrega([
            {"lat": 35.6895, "lon": 139.6917}, // Tóquio, Japão (repetido para exemplo)
            {"lat": 48.8566, "lon": 2.3522}, // Paris, França (repetido para exemplo)
            {"lat": 55.7558, "lon": 37.6176}, // Moscou, Rússia
            {"lat": 37.7749, "lon": -122.4194}, // São Francisco, EUA
            {"lat": -22.9068, "lon": -43.1729}, // Rio de Janeiro, Brasil (repetido para exemplo)
            {"lat": -34.6037, "lon": -58.3816}, // Buenos Aires, Argentina
            {"lat": 40.7128, "lon": -74.0060}, // Nova York, EUA (repetido para exemplo)
            {"lat": 51.5074, "lon": -0.1278}, // Londres, Reino Unido (repetido para exemplo)
            {"lat": -33.8688, "lon": 151.2093}, // Sydney, Austrália (repetido para exemplo)
            {"lat": 37.9838, "lon": 23.7275}, // Atenas, Grécia
            {"lat": -22.9519, "lon": -43.2105}, // Niterói, Brasil
            {"lat": 41.3851, "lon": 2.1734}, // Barcelona, Espanha
            {"lat": 34.0522, "lon": -118.2437}, // Los Angeles, EUA (repetido para exemplo)
            {"lat": 37.5665, "lon": 126.9780}, // Seul, Coreia do Sul
            {"lat": 31.2304, "lon": 121.4737}, // Xangai, China
        ]);
        const end = Date.now()
        const timeElapse = end - start

        expect(timeElapse).toBeLessThanOrEqual(1000)
        console.log(`tempo de execução: ${timeElapse}`)
    })
})