const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBUn_BqFSS2-FCALlGNB3fZ0GgF8E9zSMc`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Unable to connect to Google servers.")
            } else if (body.status === 'ZERO_RESULTS') {
                reject("Unable to find that address.");
            } else if (body.status === 'OK') {
            // console.log(JSON.stringify(body, undefined, 2));
            resolve({
                address: `Address: ${body.results[0].formatted_address}`,
                lat: `${body.results[0].geometry.location.lat}`,
                lng: `${body.results[0].geometry.location.lng}`
            });
    
            }
        });
    });
};

geocodeAddress('Warsaw').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});