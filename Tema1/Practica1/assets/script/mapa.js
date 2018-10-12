// (function(){
//     mapboxgl.accessToken = 'pk.eyJ1IjoibmF2YXJyZXRlIiwiYSI6ImNqbjY3d2lhYjB1cGMzcG9jM3RkdGFkcTMifQ.6I8gnDPDFmE-JaTO8i5-_A';
//     var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/light-v9'
//     });
// })();

(function (){
    mapboxgl.accessToken = 'pk.eyJ1IjoibmF2YXJyZXRlIiwiYSI6ImNqbjY3d2lhYjB1cGMzcG9jM3RkdGFkcTMifQ.6I8gnDPDFmE-JaTO8i5-_A';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v9',
        center: [2.154091, 41.376723],
        zoom: 17
    });

    var geojson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [2.154091, 41.376723]
          },
          properties: {
            title: 'Restaurante Enigma',
            description: 'Carrer Sepúlveda 38-40 (esquina con Carrer Entença)08015 – Barcelona'
          }
        }]
    };
    // add markers to map
    geojson.features.forEach(function(marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
    
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
            .addTo(map);

    });

})();