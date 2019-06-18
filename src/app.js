const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, "../public")

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cloudy',
        location: 'Budapest'
    })
})


app.listen(3333, () => {
    console.log('Server is up port 3333')
})