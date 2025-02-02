let stateMap = null;
let currentStateLayer = null;

const stateCodesToIBGE = {
    1: "AC", 2: "AL", 3: "AP", 4: "AM", 5: "BA",
    6: "CE", 7: "DF", 8: "ES", 9: "GO", 10: "MA",
    11: "MT", 12: "MS", 13: "MG", 14: "PA", 15: "PB",
    16: "PR", 17: "PE", 18: "PI", 19: "RJ", 20: "RS",
    21: "RN", 22: "RO", 23: "RR", 24: "SC", 25: "SP",
    26: "SE", 27: "TO"
};

const stateNames = {
    1: "Acre", 2: "Alagoas", 3: "Amapá", 4: "Amazonas",
    5: "Bahia", 6: "Ceará", 7: "Distrito Federal",
    8: "Espírito Santo", 9: "Goiás", 10: "Maranhão",
    11: "Mato Grosso", 12: "Mato Grosso do Sul",
    13: "Minas Gerais", 14: "Pará", 15: "Paraíba",
    16: "Paraná", 17: "Pernambuco", 18: "Piauí",
    19: "Rio de Janeiro", 20: "Rio Grande do Sul",
    21: "Rio Grande do Norte", 22: "Rondônia",
    23: "Roraima", 24: "Santa Catarina", 25: "São Paulo",
    26: "Sergipe", 27: "Tocantins"
};

function showMap() {
    const mapElement = document.getElementById('state-map');
    mapElement.classList.remove('hidden');
}

function isValidGeoJSON(data) {
    return data && typeof data === 'object' && data.type === 'FeatureCollection';
}

async function loadStateData(stateCode) {
    try {
        const ibgeCode = stateCodesToIBGE[stateCode].toLowerCase();
        const response = await fetch(`../../static/JSON/states-JSON/${ibgeCode}.json`);

        if (!response.ok) {
            throw new Error(`Erro ao carregar GeoJSON do estado: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (!isValidGeoJSON(data)) {
            throw new Error("Dados GeoJSON inválidos.");
        }

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
            lat: -27.59,
            lng: -48.55,
            state: "24"
        }
    ];
    return schools.filter(school => school.state === stateCode);
}

function initStateMap() {
    stateMap = L.map('state-map', {
        zoomControl: false,
        center: [-15.084058, -53.481445],
        zoom: 4,
        maxBounds: [
            [-33.8688, -73.9828],
            [5.2718, -34.7297]
        ],
        maxZoom: 10,
        minZoom: 4
    });

    L.tileLayer('#', {
        attribution: '&copy; <a href="https://destinosdokite.com.br/index.html">Destinos do Kite</a>'
    }).addTo(stateMap);
}

function userStateChoice() {
    const statesForm = document.querySelector('.state-container');
    const stateCode = statesForm.value;

    if (stateCode && stateCode !== '') {
        const statesResultText = document.querySelector('.states-result-text');
        statesResultText.classList.add('disabled');

        const statesMap = document.querySelector('.states-map');
        const schoolsList = document.querySelector('.schools-list');
        statesMap.classList.remove('disabled');
        statesMap.classList.add('activated');
        schoolsList.classList.remove('disabled');
        schoolsList.classList.add('activated');

        loadStateData(stateCode).then(() => {
            if (stateMap) {
                setTimeout(() => {
                    stateMap.invalidateSize();
                }, 100);
            }
        });
    } else {
        console.warn("Nenhum estado selecionado.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initStateMap();
    document.querySelector('.select-states-btn').addEventListener('click', userStateChoice);
});
