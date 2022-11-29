// Initialize and add the map
function initMap() {


  const stonehenge = { lat: 51.1739726374, lng: -1.82237671048 }
  const bigBen = { lat: 51.5003646652, lng: -0.1214328476 }
  const oxFordUniversity = { lat: 51.7611, lng: -1.2534 }

  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: stonehenge,
  });
  // The marker, positioned at Uluru
  const stonehengeMarker = new google.maps.Marker({
    position: stonehenge,
    map: map,
  });

  const bigBenMarker = new google.maps.Marker({
    position: bigBen,
    map: map,
  });

  const oxFordUniversityMarker = new google.maps.Marker({
    position: oxFordUniversity,
    map: map,
  });
}

window.initMap = initMap;