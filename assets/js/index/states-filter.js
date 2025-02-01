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

async function loadStateData(stateCode) {
    try {
        const response = await fetch('../../assets/static/geojson/brazil-states.geojson');
        const data = await response.json();
        
        const stateIndex = parseInt(stateCode) - 1;
        
        if (!data.features[stateIndex]) {
            console.error("Estado não encontrado");
            return;
        }

        const stateFeature = data.features[stateIndex];
        
        document.getElementById('state-name').textContent = stateNames[stateCode];
        
        if (currentStateLayer) {
            stateMap.removeLayer(currentStateLayer);
        }
        
        currentStateLayer = L.geoJSON(stateFeature, {
            style: {
                color: "#4e5873",
                weight: 2,
                fillColor: "#797f8d",
                fillOpacity: 0.5
            }
        }).addTo(stateMap);
        
        stateMap.fitBounds(currentStateLayer.getBounds());
        
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
            <div class="col-12">
                <div class="school-card">
                    <h5>${school.name}</h5>
                    <p>${school.location}</p>
                    <p>Temporada: ${school.season}</p>
                    <a href="${school.link}" class="btn btn-primary">Ver Detalhes</a>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

function getSchoolsByState(stateCode) {
    return [{
        name: "Escola Teste",
        location: "Localização Teste",
        season: "Ano Todo",
        link: "#"
    }];
}

function initStateMap() {
    stateMap = L.map('state-map', {
        zoomControl: false,
        attributionControl: false
    }).setView([-15.084058, -53.481445], 4);

    fetch('../../assets/static/geojson/brazil-states.geojson')
    .then((response) => response.json())
    .then((data) => {
        L.geoJSON(data, {
            style: function () {
                return {
                    color: "#4e5873",
                    weight: 2,
                    fillColor: "#797f8d",
                    fillOpacity: 0.3
                };
            },
        }).addTo(stateMap);
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(stateMap);
}

document.addEventListener('DOMContentLoaded', () => {
    initStateMap();
    
    document.querySelector('.select-states-btn').addEventListener('click', (e) => {
        e.preventDefault();
        const stateSelect = document.querySelector('.state-container');
        const stateCode = stateSelect.value;
        
        if (stateCode && stateCode !== 'Selecione um estado') {
            loadStateData(stateCode);
        }
    });
});