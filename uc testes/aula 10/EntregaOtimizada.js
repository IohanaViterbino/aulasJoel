function entregaOtimizada(lista) {
    const pontoInicial = {"lat": -5.783358, "lon": -35.207170}

    if(lista.length === 0 ){
        return "A lista está vazia.";
    }

    //conferir a distancia com o ponto inicial de cada um e adicionar a uma lista
    let listDistancias = []
    
    for (i in lista) {
        const distancia = haversineDistance(pontoInicial, lista[i])
        listDistancias.push(distancia)
    }

    return listDistancias.sort((a, b) => a - b);
}

function haversineDistance(point1, point2) {
    // Raio da Terra em km
    const R = 6371; 
    
    // Converte graus para radianos
    const toRadians = (degrees) => {
        return degrees * Math.PI / 180;
    };
    
    // Diferença entre as latitudes e longitudes
    const dLat = toRadians(point2.lat - point1.lat);
    const dLon = toRadians(point2.lon - point1.lon);

    // Converte as latitudes para radianos
    const lat1 = toRadians(point1.lat);
    const lat2 = toRadians(point2.lat);

    // Fórmula de Haversine
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1) * Math.cos(lat2) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c;

    return distance.toFixed(2);
}

const pontosDeExemplo = [
    {"lat": 40.7128, "lon": -74.0060}, // Nova York
    {"lat": 34.0522, "lon": -118.2437}, // Los Angeles
    {"lat": 51.5074, "lon": -0.1278}, // Londres
    {"lat": 48.8566, "lon": 2.3522}, // Paris
    {"lat": -33.8688, "lon": 151.2093}, // Sydney
    {"lat": -22.9068, "lon": -43.1729} // Rio de Janeiro
];

console.log(entregaOtimizada(pontosDeExemplo))

module.exports = entregaOtimizada;