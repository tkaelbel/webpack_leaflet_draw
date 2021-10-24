import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import "leaflet-draw/dist/leaflet.draw";
import "leaflet-draw/dist/leaflet.draw.css";

const div = document.createElement("div");
div.id = "map";
document.body.appendChild(div);

const map = L.map("map", {
  drawControl: false,
  layers: L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),
  center: [50.10718467639976, 8.663715539167507],
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
