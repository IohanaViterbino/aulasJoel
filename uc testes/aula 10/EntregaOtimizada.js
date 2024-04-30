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

    return distance;
}

// Exemplo de uso:
const point1 = {"lat": 40.7128, "lon": -74.0060}; // Nova York
const point2 = {"lat": 34.0522, "lon": -118.2437}; // Los Angeles

const distance = haversineDistance(point1, point2);
console.log("Distância entre Nova York e Los Angeles:", distance.toFixed(2), "km");
