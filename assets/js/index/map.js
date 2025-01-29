const map = L.map('map', {
    center: [-15.084058, -53.481445],
    zoom: 4,
    maxBounds: [
        [-33.8688, -73.9828],
        [5.2718, -34.7297]
    ],
    maxZoom: 9,
    minZoom: 3
});

L.tileLayer('', {
    attribution: '&copy; <a href="https://destinosdokite.com.br/index.html">Destinos do Kite</a>',
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

const kiteIcon = L.icon({
    iconUrl: '../../assets/static/images/index/hero/kitesurf.png',
    shadowUrl: '',

    iconSize: [20, 20],
    shadowSize: [0, 0],
    iconAnchor: [12.5, 12.5],
    shadowAnchor: [0, 0],
    popupAnchor: [-10, -8],
})

// Marcador de teste
L.marker([-27.481776, -49.448089], {icon: kiteIcon}).addTo(map)
    .bindPopup('<a href="../../assets/html/pages/states.html">Clique para ver as escolas de kitesurf presentes em Santa Catarina</a>');


/* 

função para pegar as coordenadas do click

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

*/

document.addEventListener('DOMContentLoaded', () => {
    const mapInfo = document.querySelector('.map-info');
    const instructionMenu = document.querySelector('.instruction-menu');
    const closeMapInfo = document.querySelector('.close-map-info');


    mapInfo.addEventListener('click', function (e) {
        e.preventDefault();
        instructionMenu.classList.toggle('active');
    });

    closeMapInfo.addEventListener('click', function () {
        instructionMenu.classList.remove('active');
    });
});
