const path = require('path')
const express = require('express')

const app = express()


// Define path for Express config
const viewPath = path.join(__dirname, '../templates/');
const publicDirectoryPath = path.join(__dirname, "../public")

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Adam Nemeth'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Adam Nemeth'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        message: 'This is a help message',
        name: 'Adam Nemeth'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cloudy',
        location: 'Budapest'
    })
})


app.listen(3333, () => {
    console.log('Server is up port 3333')
})