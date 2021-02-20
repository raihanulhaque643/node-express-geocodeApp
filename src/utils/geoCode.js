const request = require('request');
const getWeather = require('../utils/getWeather');

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamFzb25iYWtlciIsImEiOiJja2w5OTU0cXQyOWlxMzJxbThjdmpsNGppIn0.KSy1Xiu9bvQ0V--q9FsIeQ&limit=1';

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
};

module.exports = geoCode;