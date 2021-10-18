import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import "leaflet-draw/dist/leaflet.draw";
import "leaflet-draw/dist/leaflet.draw-src";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw/dist/leaflet.draw-src.css";
import "leaflet-draw/dist/images/spritesheet.png";



const div = document.createElement("div");
div.id = "map";
document.body.appendChild(div);

// const link = document.createElement("link");
// link.rel = "stylesheet";
// link.href = "https://unpkg.com/leaflet-draw@1.0.2/dist/leaflet.draw-src.css";
// document.head.appendChild(link);

// delete L.Icon.Default.prototype._getIconUrl;

const map = L.map("map", {
  drawControl: false,
  layers: L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),
  center: [46.074, 11.1476],
  zoom: 13,
});

const drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

const drawControl = new L.Control.Draw({
  edit: {
    featureGroup: drawnItems,
  }
})

map.addControl(drawControl);
