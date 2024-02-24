// MAP

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



// MARKERS

// Basic Marker | .marker([lat, lon])
var marker = L.marker([51.5, -0.09]).addTo(map);

// Circle | .circle([lat, lon])
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// Polygon | .polygon([[point 1], [point 2], [point 3], ...])
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);


// POPUPS

// Popup for Basic Marker
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// Popup for Circle
circle.bindPopup("I am a circle.");

// Popup for Polygon
polygon.bindPopup("I am a polygon.");

// Generic Popup
var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);


// EVENTS

// Get Lan e Lon from click - Alert
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
//     console.log(e);
// }

// map.on('click', onMapClick);


// Get Lan e Lon from click - Popup
// var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);