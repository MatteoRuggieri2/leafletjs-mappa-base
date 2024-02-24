// initialize the map on the "map" div with a given center and zoom
// var map = L.map('map', {
//     center: [51.505, -0.09],
//     zoom: 13
// });

// Inizializzazione mappa | .setView([lat, lon], zoom)
var map = L.map('map').setView([51.505, -0.09], 13);

// Tile Layer by OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);