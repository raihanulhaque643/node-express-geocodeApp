const request = require('request');

const fakeApi = (category, callback) => {
    const url = `https://jsonplaceholder.typicode.com/${category}`;

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to fake endpoint', undefined)
        } else if(!response.body.length){
            callback('No data returned. Try some other category.', undefined);
        } else {
            callback(undefined, {
                content: response.body
            })
        }
    })
};

module.exports = fakeApi;