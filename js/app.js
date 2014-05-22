var map = L.map('map').fitBounds([[50.6, 12.5], [50.95, 13.1]]);

L.tileLayer('http://a.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Tiles courtesy of <a href="http://www.opencyclemap.org/" target="_blank">Andy Allan</a>, ' +
		'Haltestellendaten: <a href="http://www.cvag.de/eza/mis/stations?minLat=0&maxLat=100&minLon=0&maxLon=100">CVAG</a>',
}).addTo(map);

var CVAGicon = L.icon({
	iconUrl: './CVAG.png',
	iconRetinaUrl: './CVAG@2x.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowUrl: './bower_components/leaflet-dist/images/marker-shadow.png',
	shadowSize: [41, 41]
});

$.getJSON('haltestellen.json', function(data) {
	$.each(data['stations'], function(index, value){
		var popupContent = '<dl>';
		popupContent += '<dt>Haltestellen-Name</dt>';
		popupContent += '<dd>'+ value.displayName + '</dd>';
		popupContent += '</dl>'
		L.marker([value.latitude, value.longitude], {icon: CVAGicon}).addTo(map)
			.bindPopup(popupContent);
	});
});
