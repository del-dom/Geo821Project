/**
 * Created by ronneini on 4/11/16.
 */

//// !Start Helper Function Stuff - Unnecessary for actual production
// Helper functions for getting map bounds/center during development
var sw = L.latLng(44.10337, -84.478),
    ne = L.latLng(44.74966, -83.22418),
    mapBounds = L.latLngBounds(sw, ne);
getMapStatus = function() {
    console.log("Center: " + map.getCenter() +
        "\nSouthwest: " + map.getBounds().getSouthWest() +
        "\nNortheast: " + map.getBounds().getNorthEast())
};
//// !End Helper Function Stuff

//// !Start Handle Map
// Map Options
var mapOptions = {
    center: [44.42741, -83.85109],
    zoom: 10,
    minZoom: 10 ,
    maxZoom: 18,
    maxBounds: mapBounds
};
// Initalize Map
var map = L.map("map", mapOptions);
// set up Tile Layer source, attribution, etc.
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZG9tZHAxIiwiYSI6Imx0SFpObk0ifQ.Ds4fAeW-v0w4yLqt_2Q3uQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id:'domdp1.p8ajob0h',
    accessToken:'pk.eyJ1IjoiZG9tZHAxIiwiYSI6Imx0SFpObk0ifQ.Ds4fAeW-v0w4yLqt_2Q3uQ'
}).addTo(map);
//// !End Handle Map

//// !Start Handle GeoJSON
// GeoJSON Marker Options
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}
// Set up popups and click listeners for each feature
L.geoJson(geojson, {
    onEachFeature: onEachFeature
}).addTo(map);
//// !End Handle GeoJSON

//// Logs map bounds and center to console when pan finishes (Implementation of Helper Function Stuff)
//map.on('moveend', function(e) {
//    getMapStatus();
//});