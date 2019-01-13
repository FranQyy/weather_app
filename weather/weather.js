
const request = require('request');
const geocode = require('../geocode/geocode');

geocode.geocodeAdress

var getWeather = (lat, lng, callback) => {

    var res;

    request({
    url: `https://api.darksky.net/forecast/de50c04feda65b3dc4360c189b43a572/${lat},${lng}?&units=si`,
    json: true
    }, (error, response, body) => {

        console.log(`Actual temperature is: ${body.currently.temperature}. It feels like: ${body.currently.apparentTemperature}.`);
    
        if (error) {
            callback("Unable to connect to Google servers.")
        } else if (body.status === 'ZERO_RESULTS') {
            callback("Unable to find that address.");
        } else {
        // console.log(JSON.stringify(body, undefined, 2));
        callback(undefined, {
            temp1: body.currently.temperature,
            temp2: body.currently.apparentTemperature
        });

        }
    
    });

    
}
module.exports.getWeather = getWeather;