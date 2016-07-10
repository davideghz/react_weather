var express = require('express')

// Create our app
var app = express();
//access env variables on node with process.env.NAME
const PORT = process.env.PORT || 3000;

// OpenWeatherMap only work on http, so we redirect https to http
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  }else {
    next();
  }  
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
