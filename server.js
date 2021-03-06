var express = require('express');
var app = express();
var path = require('path');

//heroku VM local path
process.env.PWD = process.cwd();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(process.env.PWD + '/public'));

// views is directory for all template files

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/main.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

