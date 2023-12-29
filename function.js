function initialMap(){
    var coord = {lat:5.633662 , lng: -73.523415};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });

}