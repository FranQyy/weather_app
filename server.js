const express = require('express');
const hbs = require('hbs');

var app = express();
const port=process.env.PORT || 3000

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

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

app.listen(port, () => {
    console.log("Server is on port 3000.");
});