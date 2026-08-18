# Petite Carte

Une petite application web de cartographie, dans l'esprit de Google Maps, construite entièrement avec des outils et données **libres et gratuits** (OpenStreetMap, Leaflet, et des API publiques sans clé requise).

## Fonctionnalités

- **Recherche de lieux** — barre de recherche avec autosuggestion en direct, géocodage d'adresses, villes ou régions.
- **Filtres de points d'intérêt** — affiche sur la carte les magasins, centres commerciaux, supermarchés, bars, restaurants, cafés, hôtels, pharmacies, distributeurs (ATM) et stations essence dans la zone visible, avec regroupement automatique des points proches (clustering) et légende des catégories affichées.
- **Calcul d'itinéraire** — distance et durée entre deux lieux, avec :
  - autosuggestion sur les deux champs (départ/arrivée), avec priorité aux résultats de la même ville/pays que le point de départ déjà choisi,
  - choix du **mode de transport** : voiture, vélo, à pied,
  - **sélection des points directement en cliquant sur la carte** (en plus de la saisie texte),
  - bouton d'inversion départ ↔ arrivée,
  - utilisation de la position GPS actuelle comme point de départ.
- **Géolocalisation** — bouton "me localiser" pour centrer la carte sur la position actuelle.
- **Mode sombre** — bascule clair/sombre, avec inversion des couleurs du fond de carte (pour conserver toutes les icônes visibles) et adaptation de toute l'interface.
- **Interface responsive** — optimisée pour ordinateur, tablette et smartphone.
<<<<<<< HEAD
- **Écran d'accueil** — résumé des fonctionnalités affiché au premier lancement, ré-accessible à tout moment via le bouton "?".
=======
>>>>>>> 559346846af4be2cf166f619289d637a8904aaf4

## Structure du projet

```
.
├── index.html    → structure de la page (HTML)
├── style.css     → mise en forme et thèmes clair/sombre (CSS)
├── logique.js    → toute la logique applicative (JavaScript)
└── README.md     → ce fichier
```

Les trois fichiers doivent rester dans le même dossier : `index.html` référence `style.css` et `logique.js` par chemin relatif.

## Technologies et bibliothèques

| Techno | Rôle |
|---|---|
| [Leaflet](https://leafletjs.com/) 1.9.4 | Bibliothèque JavaScript pour l'affichage de la carte interactive |
| [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) 1.5.3 | Regroupement visuel des points d'intérêt proches |
| HTML / CSS / JavaScript natif | Aucun framework, aucune dépendance de build |
| Polices [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) et [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (Google Fonts) | Typographie |

Toutes les bibliothèques sont chargées via CDN (`cdnjs.cloudflare.com`), aucune installation n'est nécessaire.

## API et données utilisées

Toutes les API utilisées sont **gratuites**, basées sur les données [OpenStreetMap](https://www.openstreetmap.org/copyright), et ne nécessitent **aucune clé d'API**.

| API | Usage dans l'app | Documentation |
|---|---|---|
| **Fond de carte OSM** (`tile.openstreetmap.org`) | Tuiles de la carte (fond clair et fond sombre, ce dernier obtenu par inversion CSS) | [wiki.openstreetmap.org/wiki/Tile_servers](https://wiki.openstreetmap.org/wiki/Tile_servers) |
| **Nominatim** (`nominatim.openstreetmap.org`) | Géocodage (recherche de lieux, autosuggestion, géocodage inverse pour le clic sur carte) | [nominatim.org/release-docs/latest/api/Overview](https://nominatim.org/release-docs/latest/api/Overview/) |
| **Overpass API** (`overpass-api.de` et miroirs) | Recherche des points d'intérêt (magasins, bars, restaurants, etc.) dans la zone visible | [wiki.openstreetmap.org/wiki/Overpass_API](https://wiki.openstreetmap.org/wiki/Overpass_API) |
| **OSRM** (`routing.openstreetmap.de`) | Calcul d'itinéraire et de distance (voiture / vélo / à pied) | [project-osrm.org/docs/v5.24.0/api](http://project-osrm.org/docs/v5.24.0/api/) |

### ⚠️ Politique d'usage raisonnable

Ces services publics sont fournis gratuitement par des bénévoles et des associations (OpenStreetMap Foundation, FOSSGIS) pour des usages légers, non commerciaux. Pour rester dans les règles :

- **Nominatim** : maximum 1 requête par seconde, usage non intensif, attribution obligatoire (déjà présente sur la carte).
- **Overpass API** : usage raisonnable ; l'app limite les recherches à la zone visible et exige un zoom minimum pour éviter les requêtes trop larges.
- **OSRM (routing.openstreetmap.de)** : maximum 1 requête par seconde, usage non commercial.

Pour un usage intensif, en production ou à plus grande échelle, il est recommandé d'héberger sa propre instance de ces services ou de passer par un fournisseur payant (ex. Mapbox, HERE, Google Maps Platform).

## Lancer le projet en local

L'application fait des appels réseau (`fetch`) vers des API externes. Pour que le navigateur les autorise, le site doit être servi via `http://`, et **non** ouvert directement en double-cliquant sur le fichier (`file://`), ce qui bloquerait ces requêtes.

**Avec Python :**
```bash
cd chemin/vers/le/dossier
python -m http.server 8000
```
Puis ouvrir [http://localhost:8000](http://localhost:8000).

**Avec Node.js :**
```bash
npx serve .
```
Puis ouvrir l'adresse affichée dans le terminal.

## Limites connues

- Dépend de la disponibilité des serveurs publics gratuits utilisés (pas de garantie de disponibilité ni de temps de réponse).
- Pas de mise en cache des requêtes : les mêmes recherches répétées refont un appel réseau.
- Le géocodage inverse (clic sur la carte) retourne le lieu le plus proche connu d'OpenStreetMap, qui peut parfois être imprécis en zone peu cartographiée.

## Licence des données

Les données cartographiques sont © [contributeurs OpenStreetMap](https://www.openstreetmap.org/copyright), sous licence [ODbL](https://opendatacommons.org/licenses/odbl/).
