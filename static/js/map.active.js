// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{ "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "labels.text", "stylers": [{ "visibility": "on" }, { "color": "#8e8e8e" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#7f7f7f" }] }, { "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "color": "#bebebe" }] }, { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [{ "visibility": "on" }, { "color": "#cbcbcb" }, { "weight": "0.69" }] }, { "featureType": "administrative.locality", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#ffffff" }, { "saturation": "0" }] }, { "featureType": "poi.attraction", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "saturation": "0" }] }, { "featureType": "poi.attraction", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.government", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#16754D" }, { "visibility": "on" }] }, { "featureType": "poi.park", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.place_of_worship", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.school", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.sports_complex", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.sports_complex", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.sports_complex", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": "-100" }, { "lightness": "50" }, { "gamma": "1" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#e4e4e4" }, { "saturation": "0" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "saturation": "0" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "saturation": "0" }] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "saturation": "0" }] }, { "featureType": "road.arterial", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#e4e4e4" }, { "lightness": "0" }, { "gamma": "1" }, { "saturation": "0" }] }, { "featureType": "road.local", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "transit", "elementType": "labels", "stylers": [{ "hue": "#ff0000" }, { "saturation": "-100" }, { "visibility": "simplified" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#cbcbcb" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#f3f3f3" }, { "saturation": "0" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}