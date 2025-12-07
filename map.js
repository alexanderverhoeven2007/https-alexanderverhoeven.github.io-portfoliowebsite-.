document.addEventListener('DOMContentLoaded', function () {

  // Kaart centreren op Sint-Job-in-'t-Goor centrum
  const map = L.map('map').setView([51.31090, 4.56587], 14);

  // OSM Tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap-bijdragers'
  }).addTo(map);

  // Logo Marker
  const myIcon = L.icon({
    iconUrl: 'assets/images/logo.png',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48]
  });

  // Marker op Sint-Job
  L.marker([51.31090, 4.56587], { icon: myIcon })
    .addTo(map)
    .bindPopup("Sint-Job-in-'t-Goor (mijn regio)")
    .openPopup();
});
