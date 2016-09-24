var express = require('express');
var path = require('path');

var app = express();
var route = path.join(__dirname, 'dist');

app.use(express.static(route));

app.get('*', function (request, response) {
    response.sendFile(path.join(route, 'index.html'));
});

app.listen(8080);
