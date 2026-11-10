function initMap() {

    // Coordinates of UIET Kurukshetra
    const location = {
        lat: 29.9657,
        lng: 76.8370
    };

    // Create map
    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 15,
            center: location
        }
    );

    // Add marker
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "UIET Kurukshetra"
    });

    // Add information window
    const infoWindow = new google.maps.InfoWindow({
        content: "<h3>UIET Kurukshetra</h3>"
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}