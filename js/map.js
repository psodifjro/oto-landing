// Координаты МИИГАиК (Гороховский пер., 4)
const miigaikCoords = [55.766843, 37.671075];

// Инициализация карты
const map = L.map('map').setView(miigaikCoords, 17);

// Добавляем слой карты (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
}).addTo(map);

// Кастомная иконка маркера
const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

// Добавляем маркер
L.marker(miigaikCoords, { 
    icon: customIcon 
}).addTo(map)
  .bindPopup("<b>МИИГАиК</b><br>Московский государственный университет геодезии и картографии")
  .openPopup();
