
var express = require('express'),
    path = require('path'),
    app = express(),
    port = 4444,
    bodyParser = require('body-parser');

// Make sure to include the JSX transpiler
require('babel-core/register')({
    presets: ['es2015', 'react']
});

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'view')));
// Set view path
app.set('views', path.join(__dirname, 'view'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

// Set up Routes for the application
require('./app/routes-server/routes.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port, '192.168.0.187');
console.log('Server is Up and Running at Port : ' + port);
