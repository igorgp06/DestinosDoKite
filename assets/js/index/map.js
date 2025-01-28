const map = L.map('map', {
    center: [-15.084058, -53.481445],
    zoom: 4,
    maxBounds: [
        [-33.8688, -73.9828],
        [5.2718, -34.7297]
    ],
    maxZoom: 8,
    minZoom: 4
});

/* 

por no tileLayer e nas atribuições a depender da decisão do cliente se prefero com ou sem

https://tile.openstreetmap.org/{z}/{x}/{y}.png

'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="external">OpenStreetMap</a> 
contributors and <a href="https://igorgp06.github.io/DestinosDoKite/">Destinos do Kite</a>'

*/

L.tileLayer('', {
    attribution: '&copy; <a href="https://igorgp06.github.io/DestinosDoKite/">Destinos do Kite</a>',
}).addTo(map);

fetch('../../assets/static/geojson/brazil-states.geojson')
    .then((response) => response.json())
    .then((data) => {
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "#4e5873",
                    weight: 2,
                    fillColor: "#797f8d",
                    fillOpacity: 0.3
                };
            },
        }).addTo(map);
    });

// Marcadores de teste
L.marker([-27.89037, -49.119873]).addTo(map)
    .bindPopup('<a href="../../assets/html/pages/states.html">Clique para ver as escolas de <br>kitesurf presentes em Santa Catarina</br></a>');

L.marker([-24.57991, -51.800537]).addTo(map)
    .bindPopup('<a href="../../assets/html/pages/states.html">Clique para ver as escolas de <br>kitesurf presentes no Paraná</br></a>');

/* 

função para pegar as coordenadas do click

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

*/


