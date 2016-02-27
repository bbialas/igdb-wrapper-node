var https = require('https'),
    config = require('./config');

module.exports = function (path, params, callback) {
    var queryString = '';

    if (Object.keys(params).length > 0) {
        var query = [];
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                query.push(key + '=' + params[key]);
            }
        }
        queryString = queryString + '?' + query.join('&')
    }

    var req = https.request({
        hostname: config.host,
        path: config.endpoint + path + queryString,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Token token="' + config.apiKey + '"'
        }
    }, function(response) {
        var data = '';
        response.on('data', function(chunk) {
            data += chunk;
        });

        response.on('end', function() {
            callback(null, JSON.parse(data));
        });
    });

    req.on('error', function(err) {
        callback(err);
    });

    req.end();
};