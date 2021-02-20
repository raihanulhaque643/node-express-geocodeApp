const request = require('request');

const getWeather = (lat,lon, callback) => {
    const url = `api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&appid=5ab57cfb5d79ea64c2dc14354b16a2e3`;

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to get weather for given coordinates!', undefined)
        } else {
            callback(undefined, {
                response: response
            })
        }
    })
};

module.exports = getWeather;