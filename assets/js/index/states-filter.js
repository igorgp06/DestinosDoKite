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

const datedSchools = [
    {
        name: "Escola Teste 1",
        location: "Imbituba",
        season: "Ano Todo",
        description: "Escola Teste 1",
        link: "#",
        lat: -27.59,
        lng: -48.55,
        state: "24",
        images: [
            "../../static/images/schools/school-1-24/1.jpg",
            "../../static/images/schools/school-1-24/2.jpg",
        ],
        video: "../../static/videos/school1/video.mp4",
        cardText: "Esta é uma breve descrição da Escola Teste 1. Aqui você encontra tudo sobre kitesurf!",
        socialMedia: [
            { platform: "whatsapp", link: "#" },
            { platform: "instagram", link: "#" },
            { platform: "email", link: "#" }
        ]
    },
];

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

    if (stateMap) {
        stateMap.eachLayer(layer => {
            if (layer instanceof L.Marker) {
                stateMap.removeLayer(layer);
            }
        });
    }

    schools.forEach(school => {
        const html = `
            <div class="school-card">
                <h5 class="states-result-card-title">${school.name}</h5>
                <p class="states-result-card-location">${school.location}</p>
                <p class="states-result-card-season">Melhor temporada: ${school.season}</p>
                <p class="states-result-card-description">Informações: ${school.description}</p>
                <button type="button" class="states-card-btn view-details-btn" data-school='${JSON.stringify(school)}'>Ver Detalhes</button>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);

        const kiteMarker = L.icon({
            iconUrl: '../../static/images/global/kitesurf.png',
            shadowUrl: '',
            iconSize: [17, 17],
            shadowSize: [0, 0],
            iconAnchor: [12.5, 12.5],
            shadowAnchor: [0, 0],
            popupAnchor: [-10, -8],
        });

        const marker = L.marker([school.lat, school.lng], { icon: kiteMarker }).addTo(stateMap);
        marker.bindPopup(`<b>${school.name}</b><br>${school.location}`);
    });

    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', () => {
            const schoolData = JSON.parse(button.getAttribute('data-school'));
            showSchoolDetails(schoolData);
        });
    });
}

function showSchoolDetails(school) {
    document.getElementById('school-name').textContent = school.name;
    document.getElementById('school-kitepoint').textContent = school.kitepoint || "Não informado";
    document.getElementById('school-loc').textContent = school.location || "Não informado";
    document.getElementById('airport').textContent = school.airport || "Não informado";
    document.getElementById('wind-season').textContent = school.season || "Não informado";
    document.getElementById('school-description').textContent = school.description || "Sem descrição disponível";

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';

    if (school.images && school.images.length > 0) {
        school.images.forEach((image, index) => {
            const itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';
            const imgHtml = `
                <div class="${itemClass}">
                    <img src="${image}" class="d-block w-100" alt="Imagem ${index + 1}">
                </div>
            `;
            carouselInner.insertAdjacentHTML('beforeend', imgHtml);
        });
    } else {
        carouselInner.innerHTML = `
            <div class="carousel-item active">
                <img src="../../static/images/default.jpg" class="d-block w-100" alt="Imagem padrão">
            </div>
        `;
    }

    const videoElement = document.querySelector('.school-video');
    if (school.video) {
        videoElement.src = school.video;
        videoElement.style.display = 'block';
    } else {
        videoElement.src = "";
        videoElement.style.display = 'none';
    }

    const cardTextElement = document.querySelector('.school-card-text');
    if (school.cardText) {
        cardTextElement.textContent = school.cardText;
    } else {
        cardTextElement.textContent = "Sem informações disponíveis.";
    }

    const socialLinksContainer = document.querySelector('.card-social-links');
    socialLinksContainer.innerHTML = '';

    if (school.socialMedia && school.socialMedia.length > 0) {
        school.socialMedia.forEach(social => {
            const iconClass = getSocialIconClass(social.platform);
            const linkHtml = `
                <a class="card-social-link" href="${social.link}" target="_blank">
                    <i class="${iconClass}"></i>
                </a>
            `;
            socialLinksContainer.insertAdjacentHTML('beforeend', linkHtml);
        });
    } else {
        socialLinksContainer.innerHTML = '<p>Sem redes sociais disponíveis.</p>';
    }

    const footerColor = document.querySelector('.states-footer');

    const schoolDetailsSection = document.querySelector('.school-details');
    schoolDetailsSection.classList.add('visible');
    footerColor.classList.add('footer-color')

    const closeButton = document.querySelector('.school-close');
    closeButton.onclick = () => {
        schoolDetailsSection.classList.remove('visible');
        footerColor.classList.remove('footer-color')
    };

    /* 

        corrigir essa função irritante
    
        window.onclick = (event) => {
        if (event.target === schoolDetailsSection) {
            schoolDetailsSection.classList.remove('visible');
            footerColor.classList.remove('footer-color')
        }
    };
    
    */
}

function getSocialIconClass(platform) {
    switch (platform) {
        case "whatsapp":
            return "bi bi-whatsapp";
        case "instagram":
            return "bi bi-instagram";
        case "email":
            return "bi bi-envelope";
        default:
            return "bi bi-whatsapp";
    }
}

function getSchoolsByState(stateCode) {
    return datedSchools.filter(school => school.state === stateCode);
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

    if (!stateCode || stateCode === "") {
        console.warn("Nenhum estado selecionado.");
        return;
    }

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
}

document.addEventListener('DOMContentLoaded', () => {
    initStateMap();
    document.querySelector('.select-states-btn').addEventListener('click', userStateChoice);
});
