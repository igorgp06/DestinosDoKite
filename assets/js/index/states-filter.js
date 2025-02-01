let stateMap = null;
let currentStateLayer = null;

const stateOrder = [
    "Acre", "Alagoas", "Amapá", "Amazonas",
    "Bahia", "Ceará", "Distrito Federal",
    "Espírito Santo", "Goiás", "Maranhão",
    "Mato Grosso", "Mato Grosso do Sul",
    "Minas Gerais", "Pará", "Paraíba",
    "Paraná", "Pernambuco", "Piauí",
    "Rio de Janeiro", "Rio Grande do Sul",
    "Rio Grande do Norte", "Rondônia",
    "Roraima", "Santa Catarina", "São Paulo",
    "Sergipe", "Tocantins"
];

const stateCodesToIBGE = {
    1: "AC", 2: "AL", 3: "AP", 4: "AM", 5: "BA",
    6: "CE", 7: "DF", 8: "ES", 9: "GO", 10: "MA",
    11: "MT", 12: "MS", 13: "MG", 14: "PA", 15: "PB",
    16: "PR", 17: "PE", 18: "PI", 19: "RJ", 20: "RS",
    21: "RN", 22: "RO", 23: "RR", 24: "SC", 25: "SP",
    26: "SE", 27: "TO"
};

const stateNames = {
    1: "Acre",
    2: "Alagoas",
    3: "Amapá",
    4: "Amazonas",
    5: "Bahia",
    6: "Ceará",
    7: "Distrito Federal",
    8: "Espírito Santo",
    9: "Goiás",
    10: "Maranhão",
    11: "Mato Grosso",
    12: "Mato Grosso do Sul",
    13: "Minas Gerais",
    14: "Pará",
    15: "Paraíba",
    16: "Paraná",
    17: "Pernambuco",
    18: "Piauí",
    19: "Rio de Janeiro",
    20: "Rio Grande do Sul",
    21: "Rio Grande do Norte",
    22: "Rondônia",
    23: "Roraima",
    24: "Santa Catarina",
    25: "São Paulo",
    26: "Sergipe",
    27: "Tocantins"
};

function showMap() {
    const mapElement = document.getElementById('state-map');
    mapElement.classList.remove('hidden');
}

async function loadStateData(stateCode) {
    try {
        const ibgeCode = stateCodesToIBGE[stateCode];
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v4/malhas/estados/${ibgeCode}?formato=application/json`);
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }

        const rawData = await response.json();
        console.log("Resposta da API:", rawData);

        const data = convertToValidGeoJSON(rawData);

        showMap();
        document.getElementById('state-name').textContent = stateNames[stateCode];

        if (currentStateLayer) {
            stateMap.removeLayer(currentStateLayer);
        }

        currentStateLayer = L.geoJSON(data, {
            style: {
                color: "#4e5873",
                weight: 2,
                fillColor: "#797f8d",
                fillOpacity: 0.5
            }
        }).addTo(stateMap);

        if (currentStateLayer.getBounds().isValid()) {
            stateMap.fitBounds(currentStateLayer.getBounds());
        } else {
            console.warn("Bounds inválidos para o estado selecionado.");
        }

        const schools = getSchoolsByState(stateCode);
        displaySchools(schools);
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

function isValidGeoJSON(data) {
    return data && typeof data === 'object' && data.type === 'FeatureCollection';
}

function convertToValidGeoJSON(topology) {
    if (!topology || topology.type !== "Topology") {
        throw new Error("Resposta da API não está no formato Topology.");
    }

    const key = Object.keys(topology.objects)[0];
    const geojsonData = topojson.feature(topology, topology.objects[key]);

    if (!isValidGeoJSON(geojsonData)) {
        throw new Error("Falha ao converter Topology para GeoJSON.");
    }

    return geojsonData;
}

function displaySchools(schools) {
    const container = document.getElementById('schools-container');
    container.innerHTML = '';

    schools.forEach(school => {
        const html = `
            <div class="school-card">
                <h5>${school.name}</h5>
                <p>${school.location}</p>
                <p>Temporada: ${school.season}</p>
                <a href="${school.link}" class="btn btn-primary">Ver Detalhes</a>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);

        const marker = L.marker([school.lat, school.lng]).addTo(stateMap);
        marker.bindPopup(`<b>${school.name}</b><br>${school.location}`);
    });
}

function getSchoolsByState(stateCode) {
    const schools = [
        {
            name: "Escola Teste 1",
            location: "Localização Teste 1",
            season: "Ano Todo",
            link: "#",
            state: "5"
        }
    ];

    return schools.filter(school => school.state === stateCode);
}

function initStateMap() {
    stateMap = L.map('state-map', {
        zoomControl: false,
        center: [-15.084058, -53.481445],
        zoom: 2,
        maxBounds: [
            [-33.8688, -73.9828],
            [5.2718, -34.7297]
        ],
        maxZoom: 9,
        minZoom: 3
    });

    L.tileLayer('#', {
        attribution: '&copy; <a href="https://destinosdokite.com.br/index.html">Destinos do Kite</a>'
    }).addTo(stateMap);

    fetch('../../static/geojson/brazil-states.geojson')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                style: {
                    color: "#4e5873",
                    weight: 2,
                    fillColor: "#797f8d",
                    fillOpacity: 0.3
                }
            }).addTo(stateMap);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    initStateMap();

    document.querySelector('.select-states-btn').addEventListener('click', (e) => {
        e.preventDefault();
        const stateSelect = document.querySelector('.state-container');
        const stateCode = stateSelect.value;
        console.log("Código do estado selecionado:", stateCode);

        if (stateCode && stateCode !== 'Selecione um estado') {
            loadStateData(stateCode);
        }
    });
});
