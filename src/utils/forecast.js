const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/6f18ea02671ff0b5639d650246fa4248/${lat},${long}?units=si`

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to locaion services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +
                ' degress out. The high today is '  + body.daily.data[0].temperatureHigh +
                '  with a low of ' + body.daily.data[0].temperatureLow
                + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast