// ==================== Traductions (FR / EN) ====================
const translations = {
  fr: {
    searchPlaceholder: 'Chercher une adresse, une ville, un lieu…',
    searchTitle: 'Rechercher',
    zoomInTitle: 'Zoomer',
    zoomOutTitle: 'Dézoomer',
    locateTitle: 'Me localiser',
    helpTitle: 'Voir les fonctionnalités',
    langToggleTitle: "Passer à l'anglais",
    themeToDark: 'Passer en mode sombre',
    themeToLight: 'Passer en mode clair',
    navItinerary: 'Itinéraire',
    navFilters: 'Filtres',
    routePanelTitle: 'Calculer un itinéraire',
    modeCar: 'Voiture',
    modeBike: 'Vélo',
    modeFoot: 'À pied',
    startPlaceholder: 'Point de départ',
    endPlaceholder: "Point d'arrivée",
    useLocationTitle: 'Utiliser ma position',
    swapTitle: 'Inverser départ et arrivée',
    clearBtn: 'Effacer',
    calcBtn: 'Calculer',
    filterPanelTitle: 'Afficher sur la carte',
    showBtn: 'Afficher',
    filterHint: 'Recherche dans la zone visible. Zoome un peu si la zone est trop grande.',

    onbTitle: 'Bienvenue sur Petite Carte',
    onbSubtitle: 'Une carte façon Google Maps, basée sur OpenStreetMap — 100% gratuite. Voici ce que tu peux faire :',
    onbItem1Title: 'Rechercher un lieu',
    onbItem1Desc: 'Barre de recherche en haut, avec suggestions en direct pendant la saisie.',
    onbItem2Title: 'Filtrer les lieux',
    onbItem2Desc: 'Bouton "Filtres" : affiche magasins, bars, restaurants, pharmacies... dans la zone visible, avec regroupement automatique et légende.',
    onbItem3Title: 'Calculer un itinéraire',
    onbItem3Desc: 'Bouton "Itinéraire" : tape deux lieux ou clique-les directement sur la carte, choisis voiture / vélo / à pied, inverse départ ↔ arrivée, ou pars de ta position GPS. Distance et durée s\'affichent automatiquement.',
    onbItem4Title: 'Me localiser',
    onbItem4Desc: 'Bouton rond en bas à droite : centre la carte sur ta position actuelle.',
    onbItem5Title: 'Mode sombre',
    onbItem5Desc: "Bouton lune/soleil en haut à droite pour basculer l'affichage.",
    onbItem6Title: 'Zoom',
    onbItem6Desc: 'Boutons + / − en haut à gauche pour zoomer et dézoomer.',
    onbStart: 'Commencer',

    statusSearching: 'Recherche en cours…',
    statusNoResult: 'Aucun résultat trouvé.',
    statusNetworkError: 'Erreur réseau. Réessaie.',
    statusGeoUnsupported: "La géolocalisation n'est pas supportée par ce navigateur.",
    statusLocating: 'Localisation en cours…',
    statusGeoFail: "Impossible d'obtenir la position.",
    myPosition: 'Ma position',
    statusChooseCategory: 'Choisis au moins une catégorie.',
    statusZoomMore: 'Zoome un peu plus pour chercher des lieux dans cette zone.',
    statusSearchingPOI: 'Recherche des lieux dans cette zone…',
    statusServiceDown: 'Le service de recherche est momentanément indisponible. Réessaie dans un instant.',
    statusProcessError: 'Erreur lors du traitement des résultats. Réessaie.',
    statusNoPOI: 'Aucun lieu trouvé pour ces filtres dans cette zone.',
    statusPOICount: (n) => `${n} lieu${n > 1 ? 'x' : ''} affiché${n > 1 ? 's' : ''}.`,
    statusFillBoth: "Renseigne un point de départ et un point d'arrivée.",
    statusPlaceNotFound: (q) => `Lieu introuvable : ${q}`,
    statusSearchingPlaces: 'Recherche des lieux…',
    statusCalculatingRoute: "Calcul de l'itinéraire…",
    statusNoRoute: 'Impossible de trouver un itinéraire entre ces deux lieux.',
    statusRouteError: "Erreur lors du calcul de l'itinéraire. Réessaie.",
    statusFindingPlace: 'Recherche du lieu…',
    statusPlaceLookupError: 'Impossible de récupérer le nom de ce lieu. Réessaie.',

    popupDeparture: 'Départ',
    popupArrival: 'Arrivée',
    routeSummary: (mode, from, to) => `${mode}, depuis ${from} vers ${to}.`,
    visibleArea: 'Zone visible',
    weatherDefault: 'Météo',

    categories: {
      shop: 'Magasins', mall: 'Centres commerciaux', supermarket: 'Supermarchés',
      bar: 'Bars', restaurant: 'Restaurants', cafe: 'Cafés', hotel: 'Hôtels',
      pharmacy: 'Pharmacies', atm: 'Distributeurs (ATM)', fuel: 'Stations essence'
    },
    transport: { car: 'En voiture', bike: 'À vélo', foot: 'À pied' },
    weather: {
      0: 'Ciel dégagé', 1: 'Plutôt dégagé', 2: 'Partiellement nuageux', 3: 'Couvert',
      45: 'Brouillard', 48: 'Brouillard givrant',
      51: 'Bruine légère', 53: 'Bruine', 55: 'Bruine forte',
      56: 'Bruine verglaçante', 57: 'Bruine verglaçante forte',
      61: 'Pluie légère', 63: 'Pluie', 65: 'Pluie forte',
      66: 'Pluie verglaçante', 67: 'Pluie verglaçante forte',
      71: 'Neige légère', 73: 'Neige', 75: 'Neige forte', 77: 'Grains de neige',
      80: 'Averses légères', 81: 'Averses', 82: 'Averses violentes',
      85: 'Averses de neige', 86: 'Averses de neige fortes',
      95: 'Orage', 96: 'Orage avec grêle', 99: 'Orage violent'
    }
  },

  en: {
    searchPlaceholder: 'Search for an address, city, or place…',
    searchTitle: 'Search',
    zoomInTitle: 'Zoom in',
    zoomOutTitle: 'Zoom out',
    locateTitle: 'Locate me',
    helpTitle: 'View features',
    langToggleTitle: 'Switch to French',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    navItinerary: 'Directions',
    navFilters: 'Filters',
    routePanelTitle: 'Get directions',
    modeCar: 'Car',
    modeBike: 'Bike',
    modeFoot: 'Walk',
    startPlaceholder: 'Starting point',
    endPlaceholder: 'Destination',
    useLocationTitle: 'Use my location',
    swapTitle: 'Swap start and destination',
    clearBtn: 'Clear',
    calcBtn: 'Calculate',
    filterPanelTitle: 'Show on the map',
    showBtn: 'Show',
    filterHint: 'Searches within the visible area. Zoom in a bit if the area is too large.',

    onbTitle: 'Welcome to Petite Carte',
    onbSubtitle: 'A Google Maps-like app built on OpenStreetMap — 100% free. Here\'s what you can do:',
    onbItem1Title: 'Search for a place',
    onbItem1Desc: 'Search bar at the top, with live suggestions as you type.',
    onbItem2Title: 'Filter places',
    onbItem2Desc: '"Filters" button: shows shops, bars, restaurants, pharmacies... in the visible area, with automatic clustering and a legend.',
    onbItem3Title: 'Get directions',
    onbItem3Desc: '"Directions" button: type two places or click them directly on the map, choose car / bike / walk, swap start ↔ destination, or start from your GPS position. Distance and duration appear automatically.',
    onbItem4Title: 'Locate me',
    onbItem4Desc: 'Round button at the bottom right: centers the map on your current position.',
    onbItem5Title: 'Dark mode',
    onbItem5Desc: 'Moon/sun button at the top right to switch the display.',
    onbItem6Title: 'Zoom',
    onbItem6Desc: '+ / − buttons at the top left to zoom in and out.',
    onbStart: 'Get started',

    statusSearching: 'Searching…',
    statusNoResult: 'No results found.',
    statusNetworkError: 'Network error. Try again.',
    statusGeoUnsupported: 'Geolocation is not supported by this browser.',
    statusLocating: 'Locating…',
    statusGeoFail: 'Could not get your position.',
    myPosition: 'My location',
    statusChooseCategory: 'Choose at least one category.',
    statusZoomMore: 'Zoom in a bit more to search for places in this area.',
    statusSearchingPOI: 'Searching for places in this area…',
    statusServiceDown: 'The search service is temporarily unavailable. Please try again shortly.',
    statusProcessError: 'Error while processing results. Try again.',
    statusNoPOI: 'No places found for these filters in this area.',
    statusPOICount: (n) => `${n} place${n > 1 ? 's' : ''} shown.`,
    statusFillBoth: 'Please fill in a starting point and a destination.',
    statusPlaceNotFound: (q) => `Place not found: ${q}`,
    statusSearchingPlaces: 'Searching for places…',
    statusCalculatingRoute: 'Calculating route…',
    statusNoRoute: 'Could not find a route between these two places.',
    statusRouteError: 'Error while calculating the route. Try again.',
    statusFindingPlace: 'Looking up this place…',
    statusPlaceLookupError: "Couldn't retrieve the name of this place. Try again.",

    popupDeparture: 'Start',
    popupArrival: 'Destination',
    routeSummary: (mode, from, to) => `${mode}, from ${from} to ${to}.`,
    visibleArea: 'Visible area',
    weatherDefault: 'Weather',

    categories: {
      shop: 'Shops', mall: 'Shopping malls', supermarket: 'Supermarkets',
      bar: 'Bars', restaurant: 'Restaurants', cafe: 'Cafés', hotel: 'Hotels',
      pharmacy: 'Pharmacies', atm: 'ATMs', fuel: 'Gas stations'
    },
    transport: { car: 'By car', bike: 'By bike', foot: 'On foot' },
    weather: {
      0: 'Clear sky', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Overcast',
      45: 'Fog', 48: 'Rime fog',
      51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle',
      56: 'Freezing drizzle', 57: 'Heavy freezing drizzle',
      61: 'Light rain', 63: 'Rain', 65: 'Heavy rain',
      66: 'Freezing rain', 67: 'Heavy freezing rain',
      71: 'Light snow', 73: 'Snow', 75: 'Heavy snow', 77: 'Snow grains',
      80: 'Light showers', 81: 'Showers', 82: 'Violent showers',
      85: 'Snow showers', 86: 'Heavy snow showers',
      95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Severe thunderstorm'
    }
  }
};

let currentLang = 'fr';
function t(key){ return translations[currentLang][key]; }
function catLabel(key){ return translations[currentLang].categories[key]; }
function transportLabel(mode){ return translations[currentLang].transport[mode]; }

function getSavedLang(){
  try{ return localStorage.getItem('lang'); }catch(e){ return null; }
}
function saveLang(lang){
  try{ localStorage.setItem('lang', lang); }catch(e){ /* pas grave, réinitialisé à la prochaine visite */ }
}

// Carte centrée sur Antananarivo par défaut
const map = L.map('map', { zoomControl: false }).setView([-18.8792, 47.5079], 13);

// Un seul fond de carte détaillé (OSM standard, avec toutes ses icônes : parkings, commerces, etc.)
// Le mode sombre ne change pas de fond : il inverse ses couleurs par CSS pour garder toutes les icônes visibles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19
}).addTo(map);

document.getElementById('zoomInBtn').addEventListener('click', () => map.zoomIn());
document.getElementById('zoomOutBtn').addEventListener('click', () => map.zoomOut());

// ---------- Mode sombre ----------
const themeToggle = document.getElementById('themeToggle');
const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.5A8.5 8.5 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5Z"/></svg>`;
const sunIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;

// localStorage peut être bloqué (protection anti-pistage) : on l'utilise en best-effort seulement
function getSavedTheme(){
  try{ return localStorage.getItem('theme'); }catch(e){ return null; }
}
function saveTheme(theme){
  try{ localStorage.setItem('theme', theme); }catch(e){ /* pas grave, le choix reste actif le temps de la session */ }
}

function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
  themeToggle.title = theme === 'dark' ? t('themeToLight') : t('themeToDark');
}

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(getSavedTheme() || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  saveTheme(next);
});

// ---------- Langue (FR / EN) ----------
const langToggle = document.getElementById('langToggle');

// met à jour tous les textes statiques (data-i18n / placeholder / title) + les éléments générés dynamiquement
function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if(translations[lang][key] !== undefined) el.placeholder = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if(translations[lang][key] !== undefined) el.title = translations[lang][key];
  });

  // cas particuliers à deux états, recalculés explicitement
  themeToggle.title = document.documentElement.getAttribute('data-theme') === 'dark' ? t('themeToLight') : t('themeToDark');
  langToggle.textContent = lang.toUpperCase();

  // éléments générés dynamiquement en JS : on rafraîchit leurs libellés sans perdre l'état (cases cochées, etc.)
  if(typeof refreshCategoryLabels === 'function') refreshCategoryLabels();
  if(typeof refreshLegendLabels === 'function') refreshLegendLabels();
  if(typeof refreshWeatherLabel === 'function') refreshWeatherLabel();
}

langToggle.addEventListener('click', () => {
  const next = currentLang === 'fr' ? 'en' : 'fr';
  applyLanguage(next);
  saveLang(next);
});

const browserLang = (navigator.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr';
applyLanguage(getSavedLang() || browserLang);

// ---------- Écran d'accueil (onboarding) ----------
const onboardingOverlay = document.getElementById('onboardingOverlay');
const helpBtn = document.getElementById('helpBtn');

function getOnboardingSeen(){
  try{ return localStorage.getItem('onboardingSeen'); }catch(e){ return null; }
}
function setOnboardingSeen(){
  try{ localStorage.setItem('onboardingSeen', '1'); }catch(e){ /* pas grave, réapparaîtra à la prochaine visite */ }
}

// affiché automatiquement au tout premier lancement seulement ; toujours disponible via le bouton "?"
if(getOnboardingSeen()){
  onboardingOverlay.classList.add('hidden');
}

document.getElementById('onboardingStart').addEventListener('click', () => {
  onboardingOverlay.classList.add('hidden');
  setOnboardingSeen();
});

helpBtn.addEventListener('click', () => {
  onboardingOverlay.classList.remove('hidden');
});

let marker = null;
const statusEl = document.getElementById('status');
const resultsEl = document.getElementById('results');
const input = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function showStatus(msg){
  statusEl.textContent = msg;
  statusEl.classList.add('show');
}
function hideStatus(){ statusEl.classList.remove('show'); }

function placeMarker(lat, lon, label){
  if(marker) map.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup(
    `<div class="popup-title">${label}</div><div class="popup-coords">${lat.toFixed(5)}, ${lon.toFixed(5)}</div>`
  ).openPopup();
  map.setView([lat, lon], 16);

  // météo affichée instantanément pour le lieu tout juste recherché/localisé
  clearTimeout(weatherDebounceTimer);
  updateWeather(lat, lon, label);
}

// ---------- Météo du lieu affiché (Open-Meteo, gratuite, sans clé) ----------
const weatherWidget = document.getElementById('weatherWidget');
const weatherIconEl = document.getElementById('weatherIcon');
const weatherTempEl = document.getElementById('weatherTemp');
const weatherDescEl = document.getElementById('weatherDesc');
const weatherPlaceEl = document.getElementById('weatherPlace');

let weatherDebounceTimer = null;
let lastWeatherCoords = null;
let lastWeatherCode = null;

// correspondance des codes météo WMO (utilisés par Open-Meteo) → emoji fixe + libellé traduit
const weatherEmojis = {
  0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️', 45: '🌫️', 48: '🌫️',
  51: '🌦️', 53: '🌦️', 55: '🌦️', 56: '🌦️', 57: '🌦️',
  61: '🌧️', 63: '🌧️', 65: '🌧️', 66: '🌧️', 67: '🌧️',
  71: '❄️', 73: '❄️', 75: '❄️', 77: '❄️',
  80: '🌦️', 81: '🌦️', 82: '🌦️', 85: '🌨️', 86: '🌨️',
  95: '⛈️', 96: '⛈️', 99: '⛈️'
};
function weatherCodeInfo(code){
  const emoji = weatherEmojis[code] || '🌡️';
  const desc = translations[currentLang].weather[code] || t('weatherDefault');
  return [emoji, desc];
}

// re-traduit la description météo déjà affichée, sans refaire de requête
function refreshWeatherLabel(){
  if(lastWeatherCode !== null && weatherWidget.classList.contains('show')){
    const [, desc] = weatherCodeInfo(lastWeatherCode);
    weatherDescEl.textContent = desc;
  }
}

// met à jour l'affichage météo pour une position donnée ; label optionnel (sinon géocodage inverse)
async function updateWeather(lat, lon, label){
  // évite une requête redondante si la position n'a quasiment pas bougé (~1 km)
  if(lastWeatherCoords && Math.abs(lastWeatherCoords.lat - lat) < 0.01 && Math.abs(lastWeatherCoords.lon - lon) < 0.01){
    if(label) weatherPlaceEl.textContent = label;
    return;
  }
  lastWeatherCoords = { lat, lon };

  try{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode&timezone=auto`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('Open-Meteo error');
    const data = await res.json();
    const temp = Math.round(data.current.temperature_2m);
    lastWeatherCode = data.current.weathercode;
    const [emoji, desc] = weatherCodeInfo(lastWeatherCode);

    // pas de libellé fourni (déclenché par un déplacement de carte) : on géocode le point en inverse
    const placeLabel = label || await reverseLabel(lat, lon);

    weatherIconEl.textContent = emoji;
    weatherTempEl.textContent = `${temp}°C`;
    weatherDescEl.textContent = desc;
    weatherPlaceEl.textContent = placeLabel;
    weatherWidget.classList.add('show');
  }catch(err){
    console.error('Erreur météo (Open-Meteo).', err);
  }
}

async function reverseLabel(lat, lon){
  try{
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
    const res = await fetch(url, { headers: { 'Accept-Language': currentLang } });
    const data = await res.json();
    return data.display_name ? data.display_name.split(',')[0] : t('visibleArea');
  }catch(err){
    return t('visibleArea');
  }
}

// dans les autres cas (déplacement/zoom sans recherche) : on attend 5 secondes d'immobilité
function scheduleWeatherUpdate(){
  clearTimeout(weatherDebounceTimer);
  weatherDebounceTimer = setTimeout(() => {
    const center = map.getCenter();
    updateWeather(center.lat, center.lng, null);
  }, 5000);
}
map.on('move', scheduleWeatherUpdate);
scheduleWeatherUpdate(); // déclenche aussi pour la vue initiale si l'utilisateur n'interagit pas

// Recherche via Nominatim (API gratuite d'OpenStreetMap, sans clé)
async function search(query){
  if(!query.trim()) return;
  searchBtn.disabled = true;
  showStatus(t('statusSearching'));
  resultsEl.classList.remove('show');
  resultsEl.innerHTML = '';
  try{
    const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=6&q=${encodeURIComponent(query)}`;
    const res = await fetch(url, { headers: { 'Accept-Language': currentLang } });
    const data = await res.json();
    searchBtn.disabled = false;
    hideStatus();

    if(!data.length){
      showStatus(t('statusNoResult'));
      return;
    }

    if(data.length === 1){
      const r = data[0];
      placeMarker(parseFloat(r.lat), parseFloat(r.lon), r.display_name.split(',')[0]);
      return;
    }

    data.forEach(r => {
      const item = document.createElement('div');
      item.className = 'result-item';
      const parts = r.display_name.split(',');
      item.innerHTML = `<span class="main">${parts[0]}</span><span class="sub">${parts.slice(1,3).join(',').trim()}</span>`;
      item.addEventListener('click', () => {
        placeMarker(parseFloat(r.lat), parseFloat(r.lon), parts[0]);
        resultsEl.classList.remove('show');
        input.value = parts[0];
      });
      resultsEl.appendChild(item);
    });
    resultsEl.classList.add('show');
  }catch(err){
    searchBtn.disabled = false;
    showStatus(t('statusNetworkError'));
  }
}

searchBtn.addEventListener('click', () => search(input.value));
input.addEventListener('keydown', (e) => { if(e.key === 'Enter') search(input.value); });

// Petite fonctionnalité bonus : me localiser
document.getElementById('locateBtn').addEventListener('click', () => {
  if(!navigator.geolocation){
    showStatus(t('statusGeoUnsupported'));
    return;
  }
  showStatus(t('statusLocating'));
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      hideStatus();
      placeMarker(pos.coords.latitude, pos.coords.longitude, t('myPosition'));
    },
    () => showStatus(t('statusGeoFail')),
    { enableHighAccuracy: true, timeout: 8000 }
  );
});

// Géocodage d'un lieu en un seul résultat (utilisé par l'itinéraire)
async function geocodeOne(query){
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, { headers: { 'Accept-Language': currentLang } });
  const data = await res.json();
  if(!data.length) return null;
  return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon), label: data[0].display_name.split(',')[0] };
}

function debounce(fn, delay){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Construit le paramètre viewbox pour orienter Nominatim vers une zone (biais doux, non restrictif)
function biasViewbox(bias){
  if(!bias) return '';
  const d = 1.0; // ~110 km de marge autour du point de référence
  const west = bias.lon - d, east = bias.lon + d, north = bias.lat + d, south = bias.lat - d;
  return `&viewbox=${west},${north},${east},${south}&bounded=0`;
}

// Score de priorité : même ville < même pays < reste du monde
function placePriority(r, bias){
  if(!bias) return 0;
  const addr = r.address || {};
  const sameCity = bias.city && [addr.city, addr.town, addr.village, addr.municipality].includes(bias.city);
  if(sameCity) return 0;
  if(bias.countryCode && addr.country_code === bias.countryCode) return 1;
  return 2;
}

// Auto-suggestion en direct pendant la saisie (utilisée par les champs de l'itinéraire)
// getBias() peut retourner { lat, lon, countryCode, city } pour prioriser les résultats proches
function setupAutocomplete(inputEl, suggestionsEl, onSelect, getBias){
  const runSearch = debounce(async () => {
    const q = inputEl.value.trim();
    if(q.length < 3){
      suggestionsEl.classList.remove('show');
      suggestionsEl.innerHTML = '';
      return;
    }
    try{
      const bias = getBias ? getBias() : null;
      const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=6&q=${encodeURIComponent(q)}${biasViewbox(bias)}`;
      const res = await fetch(url, { headers: { 'Accept-Language': currentLang } });
      let data = await res.json();

      // priorise les résultats de la même ville, puis du même pays que le point de référence
      if(bias){
        data = data
          .map((r, i) => ({ r, i, score: placePriority(r, bias) }))
          .sort((a, b) => a.score - b.score || a.i - b.i)
          .map(x => x.r);
      }

      suggestionsEl.innerHTML = '';
      if(!data.length){
        suggestionsEl.classList.remove('show');
        return;
      }
      data.forEach(r => {
        const item = document.createElement('div');
        item.className = 'result-item';
        const parts = r.display_name.split(',');
        item.innerHTML = `<span class="main">${parts[0]}</span><span class="sub">${parts.slice(1,3).join(',').trim()}</span>`;
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          inputEl.value = parts[0];
          onSelect({ lat: parseFloat(r.lat), lon: parseFloat(r.lon), label: parts[0], address: r.address || {} });
          suggestionsEl.classList.remove('show');
          suggestionsEl.innerHTML = '';
        });
        suggestionsEl.appendChild(item);
      });
      suggestionsEl.classList.add('show');
    }catch(err){
      console.error('Erreur autosuggestion.', err);
    }
  }, 350);

  inputEl.addEventListener('input', () => {
    // toute frappe manuelle invalide un lieu précédemment sélectionné (suggestion ou GPS)
    delete inputEl.dataset.lat;
    delete inputEl.dataset.lon;
    delete inputEl.dataset.countryCode;
    delete inputEl.dataset.city;
    runSearch();
  });
}

document.addEventListener('click', (e) => {
  if(!e.target.closest('.search-wrap')) resultsEl.classList.remove('show');
});

// ---------- Filtre des points d'intérêt (Overpass API, gratuite, données OSM) ----------
// données fixes (couleur, icône, filtre Overpass) — les libellés viennent des traductions (catLabel)
const categoryData = {
  shop:        { color: '#d68c3e', icon: '🛍️', filter: '["shop"]' },
  mall:        { color: '#8e44ad', icon: '🏬', filter: '["shop"="mall"]' },
  supermarket: { color: '#27ae60', icon: '🛒', filter: '["shop"="supermarket"]' },
  bar:         { color: '#c0392b', icon: '🍸', filter: '["amenity"="bar"]' },
  restaurant:  { color: '#e67e22', icon: '🍽️', filter: '["amenity"="restaurant"]' },
  cafe:        { color: '#795548', icon: '☕', filter: '["amenity"="cafe"]' },
  hotel:       { color: '#16a085', icon: '🛏️', filter: '["tourism"="hotel"]' },
  pharmacy:    { color: '#2980b9', icon: '✚', filter: '["amenity"="pharmacy"]' },
  atm:         { color: '#34495e', icon: '🏧', filter: '["amenity"="atm"]' },
  fuel:        { color: '#7f8c8d', icon: '⛽', filter: '["amenity"="fuel"]' }
};

const filterListEl = document.getElementById('filterList');
const filterBtn = document.getElementById('filterBtn');
const filterPanel = document.getElementById('filterPanel');
const filterCount = document.getElementById('filterCount');
const legendEl = document.getElementById('legend');

// Regroupe automatiquement les points proches pour éviter le fouillis visuel
const poiLayer = L.markerClusterGroup({
  maxClusterRadius: 50,
  iconCreateFunction: function(cluster){
    return L.divIcon({
      html: `<div class="poi-cluster" style="width:${34 + Math.min(cluster.getChildCount(),20)}px; height:${34 + Math.min(cluster.getChildCount(),20)}px;">${cluster.getChildCount()}</div>`,
      className: '',
      iconSize: null
    });
  }
});
map.addLayer(poiLayer);

Object.entries(categoryData).forEach(([key, cat]) => {
  const item = document.createElement('label');
  item.className = 'filter-item';
  item.dataset.key = key;
  item.innerHTML = `
    <input type="checkbox" data-key="${key}" />
    <span class="swatch" style="background:${cat.color}"></span>
    <span class="cat-label">${catLabel(key)}</span>
  `;
  filterListEl.appendChild(item);
});

// re-traduit les libellés de catégories déjà générées, sans perdre les cases cochées
function refreshCategoryLabels(){
  filterListEl.querySelectorAll('.filter-item').forEach(item => {
    const labelSpan = item.querySelector('.cat-label');
    if(labelSpan) labelSpan.textContent = catLabel(item.dataset.key);
  });
}

function selectedCategories(){
  return Array.from(filterListEl.querySelectorAll('input[type="checkbox"]:checked')).map(el => el.dataset.key);
}

function updateFilterCount(){
  const n = selectedCategories().length;
  filterCount.textContent = n;
  filterCount.classList.toggle('show', n > 0);
}

filterListEl.addEventListener('change', updateFilterCount);

filterBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  filterPanel.classList.toggle('show');
});
document.addEventListener('click', (e) => {
  if(!e.target.closest('.filter-panel') && !e.target.closest('.filter-btn')) filterPanel.classList.remove('show');
});

document.getElementById('filterClear').addEventListener('click', () => {
  filterListEl.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
  updateFilterCount();
  poiLayer.clearLayers();
  legendEl.classList.remove('show');
  legendEl.innerHTML = '';
  hideStatus();
});

document.getElementById('filterApply').addEventListener('click', () => loadPOIs());

// re-traduit la légende déjà affichée (basée sur les catégories actuellement cochées), sans refaire de requête
function refreshLegendLabels(){
  if(legendEl.classList.contains('show')){
    const selected = selectedCategories();
    legendEl.innerHTML = selected.map(key => {
      const c = categoryData[key];
      return `<div class="legend-item"><span class="swatch" style="background:${c.color}"></span>${c.icon} ${catLabel(key)}</div>`;
    }).join('');
  }
}

async function loadPOIs(){
  const selected = selectedCategories();
  poiLayer.clearLayers();
  if(!selected.length){
    showStatus(t('statusChooseCategory'));
    return;
  }
  if(map.getZoom() < 13){
    showStatus(t('statusZoomMore'));
    return;
  }

  const b = map.getBounds();
  const bbox = `${b.getSouth()},${b.getWest()},${b.getNorth()},${b.getEast()}`;
  const filters = selected.map(key => {
    const f = categoryData[key].filter;
    return `node${f}(${bbox});way${f}(${bbox});`;
  }).join('\n');

  const query = `[out:json][timeout:25];(${filters});out center 400;`;

  showStatus(t('statusSearchingPOI'));
  filterPanel.classList.remove('show');

  // Plusieurs miroirs gratuits d'Overpass API, on essaie chacun si le précédent échoue
  const endpoints = [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
    'https://overpass.openstreetmap.ru/api/interpreter'
  ];

  let data = null;
  let lastError = null;

  for(const endpoint of endpoints){
    try{
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(query),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if(!res.ok){
        lastError = new Error(`${endpoint} → HTTP ${res.status}`);
        continue;
      }
      data = await res.json();
      break;
    }catch(err){
      lastError = err;
      console.error(`Overpass: échec sur ${endpoint}`, err);
    }
  }

  if(!data){
    console.error('Overpass: tous les miroirs ont échoué.', lastError);
    showStatus(t('statusServiceDown'));
    return;
  }

  try{
    let count = 0;
    data.elements.forEach(el => {
      const lat = el.lat || (el.center && el.center.lat);
      const lon = el.lon || (el.center && el.center.lon);
      if(!lat || !lon) return;

      const tags = el.tags || {};
      // détermine la catégorie correspondante pour la couleur/le libellé
      let matchKey = selected.find(key => {
        const f = categoryData[key].filter.match(/"(.+?)"(?:="(.+?)")?/);
        const tagName = f[1], tagVal = f[2];
        return tagVal ? tags[tagName] === tagVal : !!tags[tagName];
      }) || selected[0];
      const cat = categoryData[matchKey];
      const label = catLabel(matchKey);

      const name = tags.name || label;
      const marker = L.marker([lat, lon], {
        icon: L.divIcon({
          className: '',
          html: `<div class="poi-pin" style="background:${cat.color}"><span>${cat.icon}</span></div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 28],
          popupAnchor: [0, -26]
        })
      });
      const addr = [tags['addr:street'], tags['addr:housenumber']].filter(Boolean).join(' ');
      marker.bindPopup(`
        <span class="popup-cat" style="background:${cat.color}">${label}</span>
        <div class="popup-title">${name}</div>
        ${addr ? `<div class="popup-coords">${addr}</div>` : ''}
      `);
      marker.addTo(poiLayer);
      count++;
    });

    hideStatus();
    if(count === 0){
      showStatus(t('statusNoPOI'));
      legendEl.classList.remove('show');
      legendEl.innerHTML = '';
    } else {
      showStatus(t('statusPOICount')(count));
      legendEl.innerHTML = selected.map(key => {
        const c = categoryData[key];
        return `<div class="legend-item"><span class="swatch" style="background:${c.color}"></span>${c.icon} ${catLabel(key)}</div>`;
      }).join('');
      legendEl.classList.add('show');
    }
  }catch(err){
    console.error('Erreur lors du traitement des résultats Overpass.', err);
    showStatus(t('statusProcessError'));
  }
}

// ---------- Itinéraire et calcul de distance (OSRM, gratuit, données OSM) ----------
const routeBtn = document.getElementById('routeBtn');
const routePanel = document.getElementById('routePanel');
const routeStartInput = document.getElementById('routeStart');
const routeEndInput = document.getElementById('routeEnd');
const routeResultEl = document.getElementById('routeResult');
const routeStartSuggestions = document.getElementById('routeStartSuggestions');
const routeEndSuggestions = document.getElementById('routeEndSuggestions');
const routeLayer = L.layerGroup().addTo(map);

function routePinIcon(color, letter){
  return L.divIcon({
    className: '',
    html: `<div class="poi-pin" style="background:${color}"><span style="font-size:12px;color:#fff;font-weight:700;transform:rotate(-45deg)">${letter}</span></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 28],
    popupAnchor: [0, -26]
  });
}

// ouvre/ferme le panneau itinéraire et active le curseur "sélection" sur la carte en conséquence
const mapContainer = document.getElementById('map');
function setRoutePanelOpen(open){
  routePanel.classList.toggle('show', open);
  mapContainer.classList.toggle('map-picking', open);
}

routeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  filterPanel.classList.remove('show');
  setRoutePanelOpen(!routePanel.classList.contains('show'));
});
document.addEventListener('click', (e) => {
  // le panneau itinéraire ne se ferme plus qu'en recliquant sur son propre bouton (cf. routeBtn ci-dessus) —
  // un clic sur la carte pour choisir un point ne doit surtout pas le fermer
  if(!e.target.closest('#routeStart') && !e.target.closest('#routeStartSuggestions')){
    routeStartSuggestions.classList.remove('show');
  }
  if(!e.target.closest('#routeEnd') && !e.target.closest('#routeEndSuggestions')){
    routeEndSuggestions.classList.remove('show');
  }
});
// évite que le panneau filtre ne recouvre le panneau itinéraire ouvert
filterBtn.addEventListener('click', () => setRoutePanelOpen(false));

document.getElementById('routeUseLocation').addEventListener('click', () => {
  if(!navigator.geolocation){
    showStatus(t('statusGeoUnsupported'));
    return;
  }
  showStatus(t('statusLocating'));
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      hideStatus();
      routeStartInput.value = t('myPosition');
      routeStartInput.dataset.lat = pos.coords.latitude;
      routeStartInput.dataset.lon = pos.coords.longitude;
      routeStartSuggestions.classList.remove('show');
      // récupère ville/pays de la position actuelle pour prioriser les suggestions d'arrivée
      try{
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&addressdetails=1&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;
        const res = await fetch(url, { headers: { 'Accept-Language': currentLang } });
        const data = await res.json();
        const addr = data.address || {};
        routeStartInput.dataset.countryCode = addr.country_code || '';
        routeStartInput.dataset.city = addr.city || addr.town || addr.village || addr.municipality || '';
      }catch(err){
        console.error('Erreur reverse geocoding.', err);
      }
    },
    () => showStatus(t('statusGeoFail')),
    { enableHighAccuracy: true, timeout: 8000 }
  );
});

// auto-suggestion en direct sur les deux champs de l'itinéraire
// dès qu'un lieu est choisi (départ ou arrivée), on mémorise ses coordonnées et sa ville/pays sur le champ lui-même
setupAutocomplete(routeStartInput, routeStartSuggestions, (place) => {
  routeStartInput.dataset.lat = place.lat;
  routeStartInput.dataset.lon = place.lon;
  routeStartInput.dataset.countryCode = place.address.country_code || '';
  routeStartInput.dataset.city = place.address.city || place.address.town || place.address.village || place.address.municipality || '';
});
setupAutocomplete(routeEndInput, routeEndSuggestions, (place) => {
  routeEndInput.dataset.lat = place.lat;
  routeEndInput.dataset.lon = place.lon;
  routeEndInput.dataset.countryCode = place.address.country_code || '';
  routeEndInput.dataset.city = place.address.city || place.address.town || place.address.village || place.address.municipality || '';
}, () => routeBias(routeStartInput));

// lit le biais géographique (ville/pays) directement depuis un champ, pour rester fiable même après inversion
function routeBias(inputEl){
  if(!inputEl.dataset.lat) return null;
  return {
    lat: parseFloat(inputEl.dataset.lat),
    lon: parseFloat(inputEl.dataset.lon),
    countryCode: inputEl.dataset.countryCode,
    city: inputEl.dataset.city
  };
}

// ---------- Choix du mode de transport (OSRM, gratuit, serveur public FOSSGIS) ----------
// Chaque mode a son propre serveur de démonstration public (voiture, vélo, à pied) — libellés via transportLabel()
const transportData = {
  car:  { osrmBase: 'https://routing.openstreetmap.de/routed-car/route/v1/driving' },
  bike: { osrmBase: 'https://routing.openstreetmap.de/routed-bike/route/v1/driving' },
  foot: { osrmBase: 'https://routing.openstreetmap.de/routed-foot/route/v1/driving' }
};
let selectedMode = 'car';

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedMode = btn.dataset.mode;
    // si un itinéraire est déjà affiché, on le recalcule directement dans le nouveau mode
    if(routeStartInput.value.trim() && routeEndInput.value.trim() && routeResultEl.classList.contains('show')){
      calculateRoute();
    }
  });
});

function formatDistance(m){
  return m >= 1000 ? `${(m / 1000).toFixed(1)} km` : `${Math.round(m)} m`;
}
function formatDuration(s){
  const h = Math.floor(s / 3600);
  const min = Math.round((s % 3600) / 60);
  return h > 0 ? `${h} h ${min} min` : `${min} min`;
}

document.getElementById('routeClear').addEventListener('click', () => {
  routeLayer.clearLayers();
  routeStartInput.value = '';
  routeEndInput.value = '';
  ['lat', 'lon', 'countryCode', 'city'].forEach(key => {
    delete routeStartInput.dataset[key];
    delete routeEndInput.dataset[key];
  });
  selectedMode = 'car';
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === 'car'));
  startClickMarker = null;
  endClickMarker = null;
  mapClickTarget = 'start';
  routeStartSuggestions.classList.remove('show');
  routeEndSuggestions.classList.remove('show');
  routeResultEl.classList.remove('show');
  routeResultEl.innerHTML = '';
  hideStatus();
});

document.getElementById('routeCalc').addEventListener('click', calculateRoute);

// ---------- Sélection des points de l'itinéraire directement en cliquant sur la carte ----------
// n'est actif que quand le panneau itinéraire est ouvert ; alterne départ ↔ arrivée à chaque clic
let mapClickTarget = 'start';
let startClickMarker = null;
let endClickMarker = null;

routeStartInput.addEventListener('focus', () => { mapClickTarget = 'start'; });
routeEndInput.addEventListener('focus', () => { mapClickTarget = 'end'; });

map.on('click', async (e) => {
  if(!routePanel.classList.contains('show')) return;

  const { lat, lng } = e.latlng;
  showStatus(t('statusFindingPlace'));

  try{
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&addressdetails=1&lat=${lat}&lon=${lng}`;
    const res = await fetch(url, { headers: { 'Accept-Language': currentLang } });
    const data = await res.json();
    const addr = data.address || {};
    const label = data.display_name ? data.display_name.split(',')[0] : `${lat.toFixed(5)}, ${lng.toFixed(5)}`;

    const targetInput = mapClickTarget === 'start' ? routeStartInput : routeEndInput;
    targetInput.value = label;
    targetInput.dataset.lat = lat;
    targetInput.dataset.lon = lng;
    targetInput.dataset.countryCode = addr.country_code || '';
    targetInput.dataset.city = addr.city || addr.town || addr.village || addr.municipality || '';

    // affiche un repère temporaire à l'endroit cliqué (remplacé au calcul de l'itinéraire)
    const icon = mapClickTarget === 'start' ? routePinIcon('#2e7d32', 'A') : routePinIcon('#c0392b', 'B');
    const popupLabel = mapClickTarget === 'start' ? t('popupDeparture') : t('popupArrival');
    if(mapClickTarget === 'start'){
      if(startClickMarker) routeLayer.removeLayer(startClickMarker);
      startClickMarker = L.marker([lat, lng], { icon }).bindPopup(`<div class="popup-title">${popupLabel}</div>${label}`).addTo(routeLayer);
    } else {
      if(endClickMarker) routeLayer.removeLayer(endClickMarker);
      endClickMarker = L.marker([lat, lng], { icon }).bindPopup(`<div class="popup-title">${popupLabel}</div>${label}`).addTo(routeLayer);
    }

    hideStatus();
    // le clic suivant remplit automatiquement l'autre champ
    mapClickTarget = mapClickTarget === 'start' ? 'end' : 'start';

    // dès que les deux points sont définis (via clic carte), on calcule directement l'itinéraire
    if(routeStartInput.dataset.lat && routeEndInput.dataset.lat){
      calculateRoute();
    }
  }catch(err){
    console.error('Erreur reverse geocoding (clic carte).', err);
    showStatus(t('statusPlaceLookupError'));
  }
});

document.getElementById('routeSwap').addEventListener('click', () => {
  // échange le texte affiché
  const tmpValue = routeStartInput.value;
  routeStartInput.value = routeEndInput.value;
  routeEndInput.value = tmpValue;

  // échange les données mémorisées (coordonnées, ville, pays) pour chaque champ
  ['lat', 'lon', 'countryCode', 'city'].forEach(key => {
    const tmp = routeStartInput.dataset[key];
    if(routeEndInput.dataset[key] !== undefined) routeStartInput.dataset[key] = routeEndInput.dataset[key];
    else delete routeStartInput.dataset[key];
    if(tmp !== undefined) routeEndInput.dataset[key] = tmp;
    else delete routeEndInput.dataset[key];
  });

  routeStartSuggestions.classList.remove('show');
  routeEndSuggestions.classList.remove('show');

  // si un itinéraire était déjà affiché, on le recalcule directement dans le nouveau sens
  if(routeStartInput.value.trim() && routeEndInput.value.trim() && routeResultEl.classList.contains('show')){
    calculateRoute();
  }
});

async function calculateRoute(){
  const startQuery = routeStartInput.value.trim();
  const endQuery = routeEndInput.value.trim();

  if(!startQuery || !endQuery){
    showStatus(t('statusFillBoth'));
    return;
  }

  routeLayer.clearLayers();
  startClickMarker = null;
  endClickMarker = null;
  routeResultEl.classList.remove('show');
  showStatus(t('statusSearchingPlaces'));

  try{
    // Utilise les coordonnées mémorisées (suggestion cliquée ou GPS) si disponibles, sinon géocode le texte
    const startPoint = (routeStartInput.dataset.lat)
      ? { lat: parseFloat(routeStartInput.dataset.lat), lon: parseFloat(routeStartInput.dataset.lon), label: routeStartInput.value || t('startPlaceholder') }
      : await geocodeOne(startQuery);
    const endPoint = (routeEndInput.dataset.lat)
      ? { lat: parseFloat(routeEndInput.dataset.lat), lon: parseFloat(routeEndInput.dataset.lon), label: routeEndInput.value || t('endPlaceholder') }
      : await geocodeOne(endQuery);

    if(!startPoint || !endPoint){
      showStatus(t('statusPlaceNotFound')(!startPoint ? startQuery : endQuery));
      return;
    }

    showStatus(t('statusCalculatingRoute'));
    const base = transportData[selectedMode].osrmBase;
    const url = `${base}/${startPoint.lon},${startPoint.lat};${endPoint.lon},${endPoint.lat}?overview=full&geometries=geojson`;
    const res = await fetch(url);
    const data = await res.json();

    if(data.code !== 'Ok' || !data.routes.length){
      showStatus(t('statusNoRoute'));
      return;
    }

    const route = data.routes[0];
    const latlngs = route.geometry.coordinates.map(c => [c[1], c[0]]);

    // couleur du tracé alignée sur le thème actif (clair ou sombre)
    const routeColor = getComputedStyle(document.documentElement).getPropertyValue('--moss').trim() || '#3c5c48';
    const line = L.polyline(latlngs, { color: routeColor, weight: 5, opacity: 0.85 }).addTo(routeLayer);
    L.marker([startPoint.lat, startPoint.lon], { icon: routePinIcon('#2e7d32', 'A') })
      .bindPopup(`<div class="popup-title">${t('popupDeparture')}</div>${startPoint.label}`)
      .addTo(routeLayer);
    L.marker([endPoint.lat, endPoint.lon], { icon: routePinIcon('#c0392b', 'B') })
      .bindPopup(`<div class="popup-title">${t('popupArrival')}</div>${endPoint.label}`)
      .addTo(routeLayer);

    map.fitBounds(line.getBounds(), { padding: [40, 40] });

    hideStatus();
    routeResultEl.innerHTML = `
      <div class="big">${formatDistance(route.distance)} — ${formatDuration(route.duration)}</div>
      <div>${t('routeSummary')(transportLabel(selectedMode), startPoint.label, endPoint.label)}</div>
    `;
    routeResultEl.classList.add('show');
  }catch(err){
    console.error('Erreur lors du calcul d\'itinéraire.', err);
    showStatus(t('statusRouteError'));
  }
}
