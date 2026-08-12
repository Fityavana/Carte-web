// Carte centrée sur Antananarivo par défaut
const map = L.map('map', { zoomControl: false }).setView([-18.8792, 47.5079], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19
}).addTo(map);

document.getElementById('zoomInBtn').addEventListener('click', () => map.zoomIn());
document.getElementById('zoomOutBtn').addEventListener('click', () => map.zoomOut());

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
