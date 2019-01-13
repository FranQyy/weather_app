
const request = require('request');
const geocode = require('../geocode/geocode');

geocode.geocodeAdress

var getWeather = (lat, lng) => {
    request({
    url: `https://api.darksky.net/forecast/de50c04feda65b3dc4360c189b43a572/${lat},${lng}?&units=si`,
    json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to Google servers.")
        }
        console.log(`Actual temperature is: ${body.currently.temperature}. It feels like: ${body.currently.apparentTemperature}.`);
    });
}
module.exports.getWeather = getWeather;