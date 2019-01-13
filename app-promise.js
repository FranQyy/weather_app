const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            street: true
        }
})
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBUn_BqFSS2-FCALlGNB3fZ0GgF8E9zSMc`

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address.');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/de50c04feda65b3dc4360c189b43a572/${lat},${lng}?&units=si`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperatur = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like  ${apparentTemperatur}`);
}).catch((e) => {
    if (e.code === "ENOTFOUND"){
        console.log(e);
    } else {
        console.log(e.message);
    }
});