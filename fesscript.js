// Dynamic City Selection
document.getElementById('state').addEventListener('change', function() {
    const state = this.value;
    const cityDropdown = document.getElementById('city');
    cityDropdown.innerHTML = '<option value="">Select City</option>';
  
    if (state === 'Maharashtra') {
      cityDropdown.innerHTML += '<option value="Mumbai">Mumbai</option>';
      cityDropdown.innerHTML += '<option value="Pune">Pune</option>';
    } else if (state === 'Delhi') {
      cityDropdown.innerHTML += '<option value="New Delhi">New Delhi</option>';
    }
    // Add more states and cities as needed
  });
  
  // Geolocation API to get user's current location and display map
  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  // Function to show the user's position
  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    initializeMap(lat, lon);
  }
  
  // Error handling for geolocation
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  
  // Google Map initialization
  function initializeMap(lat, lon) {
    const mapOptions = {
      center: new google.maps.LatLng(lat, lon),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    new google.maps.Marker({
      position: new google.maps.LatLng(lat, lon),
      map: map,
      title: "You are here",
    });
  }
  