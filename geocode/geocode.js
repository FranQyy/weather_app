const request = require('request');

function geocodeAddress (address, callback) {
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBUn_BqFSS2-FCALlGNB3fZ0GgF8E9zSMc`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to Google servers.")
        } else if (body.status === 'ZERO_RESULTS') {
            callback("Unable to find that address.");
        } else if (body.status === 'OK') {
        // console.log(JSON.stringify(body, undefined, 2));
        callback(undefined, {
            address: `Address: ${body.results[0].formatted_address}`,
            lat: `${body.results[0].geometry.location.lat}`,
            lng: `${body.results[0].geometry.location.lng}`
        });

        }
    });
}

module.exports.geocodeAddress = geocodeAddress;