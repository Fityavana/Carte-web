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
  themeToggle.title = theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre';
}

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(getSavedTheme() || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  saveTheme(next);
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
}

// Recherche via Nominatim (API gratuite d'OpenStreetMap, sans clé)
async function search(query){
  if(!query.trim()) return;
  searchBtn.disabled = true;
  showStatus('Recherche en cours…');
  resultsEl.classList.remove('show');
  resultsEl.innerHTML = '';
  try{
    const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=6&q=${encodeURIComponent(query)}`;
    const res = await fetch(url, { headers: { 'Accept-Language': 'fr' } });
    const data = await res.json();
    searchBtn.disabled = false;
    hideStatus();

    if(!data.length){
      showStatus('Aucun résultat trouvé.');
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
    showStatus('Erreur réseau. Réessaie.');
  }
}

searchBtn.addEventListener('click', () => search(input.value));
input.addEventListener('keydown', (e) => { if(e.key === 'Enter') search(input.value); });

// Petite fonctionnalité bonus : me localiser
document.getElementById('locateBtn').addEventListener('click', () => {
  if(!navigator.geolocation){
    showStatus("La géolocalisation n'est pas supportée par ce navigateur.");
    return;
  }
  showStatus('Localisation en cours…');
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      hideStatus();
      placeMarker(pos.coords.latitude, pos.coords.longitude, 'Ma position');
    },
    () => showStatus("Impossible d'obtenir la position."),
    { enableHighAccuracy: true, timeout: 8000 }
  );
});

// Géocodage d'un lieu en un seul résultat (utilisé par l'itinéraire)
async function geocodeOne(query){
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, { headers: { 'Accept-Language': 'fr' } });
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
      const res = await fetch(url, { headers: { 'Accept-Language': 'fr' } });
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
const categories = {
  shop:        { label: 'Magasins',            color: '#d68c3e', icon: '🛍️', filter: '["shop"]' },
  mall:        { label: 'Centres commerciaux',  color: '#8e44ad', icon: '🏬', filter: '["shop"="mall"]' },
  supermarket: { label: 'Supermarchés',         color: '#27ae60', icon: '🛒', filter: '["shop"="supermarket"]' },
  bar:         { label: 'Bars',                 color: '#c0392b', icon: '🍸', filter: '["amenity"="bar"]' },
  restaurant:  { label: 'Restaurants',          color: '#e67e22', icon: '🍽️', filter: '["amenity"="restaurant"]' },
  cafe:        { label: 'Cafés',                color: '#795548', icon: '☕', filter: '["amenity"="cafe"]' },
  hotel:       { label: 'Hôtels',                color: '#16a085', icon: '🛏️', filter: '["tourism"="hotel"]' },
  pharmacy:    { label: 'Pharmacies',            color: '#2980b9', icon: '✚', filter: '["amenity"="pharmacy"]' },
  atm:         { label: 'Distributeurs (ATM)',   color: '#34495e', icon: '🏧', filter: '["amenity"="atm"]' },
  fuel:        { label: 'Stations essence',      color: '#7f8c8d', icon: '⛽', filter: '["amenity"="fuel"]' }
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

Object.entries(categories).forEach(([key, cat]) => {
  const item = document.createElement('label');
  item.className = 'filter-item';
  item.innerHTML = `
    <input type="checkbox" data-key="${key}" />
    <span class="swatch" style="background:${cat.color}"></span>
    <span>${cat.label}</span>
  `;
  filterListEl.appendChild(item);
});

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

async function loadPOIs(){
  const selected = selectedCategories();
  poiLayer.clearLayers();
  if(!selected.length){
    showStatus('Choisis au moins une catégorie.');
    return;
  }
  if(map.getZoom() < 13){
    showStatus('Zoome un peu plus pour chercher des lieux dans cette zone.');
    return;
  }

  const b = map.getBounds();
  const bbox = `${b.getSouth()},${b.getWest()},${b.getNorth()},${b.getEast()}`;
  const filters = selected.map(key => {
    const f = categories[key].filter;
    return `node${f}(${bbox});way${f}(${bbox});`;
  }).join('\n');

  const query = `[out:json][timeout:25];(${filters});out center 400;`;

  showStatus('Recherche des lieux dans cette zone…');
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
    showStatus("Le service de recherche est momentanément indisponible. Réessaie dans un instant.");
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
        const f = categories[key].filter.match(/"(.+?)"(?:="(.+?)")?/);
        const tagName = f[1], tagVal = f[2];
        return tagVal ? tags[tagName] === tagVal : !!tags[tagName];
      }) || selected[0];
      const cat = categories[matchKey];

      const name = tags.name || cat.label;
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
        <span class="popup-cat" style="background:${cat.color}">${cat.label}</span>
        <div class="popup-title">${name}</div>
        ${addr ? `<div class="popup-coords">${addr}</div>` : ''}
      `);
      marker.addTo(poiLayer);
      count++;
    });

    hideStatus();
    if(count === 0){
      showStatus('Aucun lieu trouvé pour ces filtres dans cette zone.');
      legendEl.classList.remove('show');
      legendEl.innerHTML = '';
    } else {
      showStatus(`${count} lieu${count > 1 ? 'x' : ''} affiché${count > 1 ? 's' : ''}.`);
      legendEl.innerHTML = selected.map(key => {
        const c = categories[key];
        return `<div class="legend-item"><span class="swatch" style="background:${c.color}"></span>${c.icon} ${c.label}</div>`;
      }).join('');
      legendEl.classList.add('show');
    }
  }catch(err){
    console.error('Erreur lors du traitement des résultats Overpass.', err);
    showStatus("Erreur lors du traitement des résultats. Réessaie.");
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

routeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  filterPanel.classList.remove('show');
  routePanel.classList.toggle('show');
});
document.addEventListener('click', (e) => {
  if(!e.target.closest('.route-panel') && !e.target.closest('.route-btn')) routePanel.classList.remove('show');
  if(!e.target.closest('#routeStart') && !e.target.closest('#routeStartSuggestions')){
    routeStartSuggestions.classList.remove('show');
  }
  if(!e.target.closest('#routeEnd') && !e.target.closest('#routeEndSuggestions')){
    routeEndSuggestions.classList.remove('show');
  }
});
// évite que le panneau filtre ne recouvre le panneau itinéraire ouvert
filterBtn.addEventListener('click', () => routePanel.classList.remove('show'));

document.getElementById('routeUseLocation').addEventListener('click', () => {
  if(!navigator.geolocation){
    showStatus("La géolocalisation n'est pas supportée par ce navigateur.");
    return;
  }
  showStatus('Localisation en cours…');
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      hideStatus();
      routeStartInput.value = 'Ma position';
      routeStartInput.dataset.lat = pos.coords.latitude;
      routeStartInput.dataset.lon = pos.coords.longitude;
      routeStartSuggestions.classList.remove('show');
      // récupère ville/pays de la position actuelle pour prioriser les suggestions d'arrivée
      try{
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&addressdetails=1&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;
        const res = await fetch(url, { headers: { 'Accept-Language': 'fr' } });
        const data = await res.json();
        const addr = data.address || {};
        routeStartInput.dataset.countryCode = addr.country_code || '';
        routeStartInput.dataset.city = addr.city || addr.town || addr.village || addr.municipality || '';
      }catch(err){
        console.error('Erreur reverse geocoding.', err);
      }
    },
    () => showStatus("Impossible d'obtenir la position."),
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
  routeStartSuggestions.classList.remove('show');
  routeEndSuggestions.classList.remove('show');
  routeResultEl.classList.remove('show');
  routeResultEl.innerHTML = '';
  hideStatus();
});

document.getElementById('routeCalc').addEventListener('click', calculateRoute);

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
    showStatus('Renseigne un point de départ et un point d\'arrivée.');
    return;
  }

  routeLayer.clearLayers();
  routeResultEl.classList.remove('show');
  showStatus('Recherche des lieux…');

  try{
    // Utilise les coordonnées mémorisées (suggestion cliquée ou GPS) si disponibles, sinon géocode le texte
    const startPoint = (routeStartInput.dataset.lat)
      ? { lat: parseFloat(routeStartInput.dataset.lat), lon: parseFloat(routeStartInput.dataset.lon), label: routeStartInput.value || 'Point de départ' }
      : await geocodeOne(startQuery);
    const endPoint = (routeEndInput.dataset.lat)
      ? { lat: parseFloat(routeEndInput.dataset.lat), lon: parseFloat(routeEndInput.dataset.lon), label: routeEndInput.value || 'Point d\'arrivée' }
      : await geocodeOne(endQuery);

    if(!startPoint || !endPoint){
      showStatus(`Lieu introuvable : ${!startPoint ? startQuery : endQuery}`);
      return;
    }

    showStatus('Calcul de l\'itinéraire…');
    const url = `https://router.project-osrm.org/route/v1/driving/${startPoint.lon},${startPoint.lat};${endPoint.lon},${endPoint.lat}?overview=full&geometries=geojson`;
    const res = await fetch(url);
    const data = await res.json();

    if(data.code !== 'Ok' || !data.routes.length){
      showStatus("Impossible de trouver un itinéraire entre ces deux lieux.");
      return;
    }

    const route = data.routes[0];
    const latlngs = route.geometry.coordinates.map(c => [c[1], c[0]]);

    // couleur du tracé alignée sur le thème actif (clair ou sombre)
    const routeColor = getComputedStyle(document.documentElement).getPropertyValue('--moss').trim() || '#3c5c48';
    const line = L.polyline(latlngs, { color: routeColor, weight: 5, opacity: 0.85 }).addTo(routeLayer);
    L.marker([startPoint.lat, startPoint.lon], { icon: routePinIcon('#2e7d32', 'A') })
      .bindPopup(`<div class="popup-title">Départ</div>${startPoint.label}`)
      .addTo(routeLayer);
    L.marker([endPoint.lat, endPoint.lon], { icon: routePinIcon('#c0392b', 'B') })
      .bindPopup(`<div class="popup-title">Arrivée</div>${endPoint.label}`)
      .addTo(routeLayer);

    map.fitBounds(line.getBounds(), { padding: [40, 40] });

    hideStatus();
    routeResultEl.innerHTML = `
      <div class="big">${formatDistance(route.distance)} — ${formatDuration(route.duration)}</div>
      <div>En voiture, depuis ${startPoint.label} vers ${endPoint.label}.</div>
    `;
    routeResultEl.classList.add('show');
  }catch(err){
    console.error('Erreur lors du calcul d\'itinéraire.', err);
    showStatus("Erreur lors du calcul de l'itinéraire. Réessaie.");
  }
}
