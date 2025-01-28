// Inicializando o mapa
const map = L.map('map').setView([-14.2350, -51.9253], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors and <a href="https://igorgp06.github.io/DestinosDoKite/" target="_blank">Destinos do Kite</a>',
}).addTo(map);

fetch('../../assets/static/geojson/brazil-states.geojson')
    .then((response) => response.json())
    .then((data) => {
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "#000",
                    weight: 1,
                    fillColor: "#FFF",
                    fillOpacity: 0.1 
                };
            },
            onEachFeature: function (feature, layer) {

                layer.on('click', function () {
                    alert(`Você clicou no estado: ${feature.properties.NAME}`);
                });
            },
        }).addTo(map);
    });