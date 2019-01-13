const express = require('express');
const hbs = require('hbs');

var app = express();
const port=process.env.PORT || 3000

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.listen(port, () => {
    console.log("Server is on port 3000.");
});