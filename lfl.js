window.onload = function() {
	var sendBaseButton = document.querySelector('#sendBase'),
    display1 = document.querySelector('#display1'),  
    xhr,
    base = "https://maps.googleapis.com/maps/api/geocode/json?address=510 Victoria+Venice+CA&key=AIzaSyDotV4_SlT3QNCKZlPEQijc8F1W-k5dVLs",
    stub = "https://maps.googleapis.com/maps/api/geocode/json?address=Hollywood+Sign+Los+Angeles+CA&key=AIzaSyDotV4_SlT3QNCKZlPEQijc8F1W-k5dVLs";
	
	if(window.XMLHttpRequest) {
	    xhr = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	    xhr = new ActiveXObject();
	}

	function sendBase() {
		xhr.open("GET", base);
		xhr.send();
	}

	sendBaseButton.addEventListener("click", sendBase);

	xhr.onreadystatechange = function () {
	    if(xhr.readyState === 4) {
	        if(xhr.status === 200) {
	            var payload = JSON.parse(this.responseText);
	            var latLong = {};
	            latLong['lat'] = payload.results[0].geometry.location.lat; 
	            latLong['lng'] = payload.results[0].geometry.location.lng; 
	            display1.innerHTML=latLong['lat'] + ',' + latLong['lng'];
	        } else {
	            alert('Problem sending request');
	        }       
	    }
	};

}