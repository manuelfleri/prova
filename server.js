var express = require('express');

var app= express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.send('Ciao Mondo, sono una APP DI PROVA - first deploy ');
});

app.listen(app.get('port'), function() {
    console.log('Esempio di web app che gira sulla porta :' + app.get('port'));
});