
var express= require('express');
var app = express();
var PORT = process.env.PORT || 8000;

// SERVE STATIC CONTENT FROM PUBLIC DIRECTORY IN THE APPLICATION DIRECTORY
app.use(express.static('public'));

// PARSE APP BODY DATA FROM JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgersController');
app.use(routes);


app.listen(PORT, function() {
    console.log('App listening on on PORT:' + PORT);
});
