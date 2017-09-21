$(document).ready(function () {

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* google */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function initialize() {
        var map_canvas = document.getElementById('googleMap');

        var map_options = {
            center: new google.maps.LatLng(37.7577, -122.4376),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };

        var map = new google.maps.Map(map_canvas, map_options);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(37.7577, -122.4376),
            map: map,
            title: 'Britt Resides Here'
        });
        var styles = [
            {
                "featureType": "landscape",
                "stylers": [
                    { "visibility": "on" },
                    { "color": "#83b03c" }
                ]
            },{
                "featureType": "poi",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "road",
                "stylers": [
                    { "color": "#cdde65" }
                ]
            },{
                "elementType": "geometry.stroke",
                "stylers": [
                    { "visibility": "on" }
                ]
            },{
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "visibility": "on" },
                    { "weight": 8 },
                    { "hue": "#ff0000" },
                    { "color": "#ffffff" }
                ]
            },{
                "featureType": "landscape",
                "elementType": "labels.text.stroke",
                "stylers": [
                    { "color": "#ffffff" },
                    { "visibility": "off" }
                ]
            },{
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    { "visibility": "on" }
                ]
            },{
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "visibility": "off" },
                    { "color": "#ffffff" }
                ]
            },{
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    { "visibility": "on" },
                    { "color": "#ffffff" }
                ]
            },{
                "featureType": "water",
                "stylers": [
                    { "color": "#00bff3" }
                ]
            },{
            }
        ]
        map.setOptions({styles: styles});
    }
    google.maps.event.addDomListener(window, 'load', initialize);


});