const express = require('express');
const hbs = require('hbs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

var app = express();
const port=process.env.PORT || 3000

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser')

const middleware = [
  bodyParser.urlencoded()
]
app.use(middleware)


app.get('/', (req, res) => {
    res.render('home.hbs', {
       pageTitle: 'Home Page',
       welcomeMessage: 'Welcome to the FranQyy-weather App!',
       currentYear: new Date().getFullYear() 
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        welcomeMessage: 'It is an awesome app. Thanks to visit me!',
        currentYear: new Date().getFullYear() 
     });
});

app.get('/weather-forecast', (req, res) => {
    res.render('forecast-weather.hbs', {
        pageTitle: 'Weather Forecast',
        welcomeMessage: 'Check the weather!',
        currentYear: new Date().getFullYear() 
     });
});

app.post('/weather-forecast', (req, res) => {
    var data = req.body;


    geocode.geocodeAddress(data.city, (errorMessage, results) => {
        if (errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(results.address);
            weather.getWeather(results.lat, results.lng, (errorMessage, results) => {
                if (errorMessage) {
                    console.log(errorMessage);
                } else {
                    console.log(JSON.stringify(results, undefined, 2));
                } 
                res.render('forecast-weather.hbs', {
                    pageTitle: 'Weather Forecast',
                    welcomeMessage: 'Check the weather!',
                    currentYear: new Date().getFullYear(),
                    city: data.city, // { message, email }
                    temp1: results.temp1,
                    temp2: results.temp2
            
                })

            })}
        }
    )


  })

app.listen(port, () => {
    console.log("Server is on port 3000.");
});