//require express
const express = require("express");
const path = require('path');
<<<<<<< HEAD

const exphbs = require('express-handlebars');
=======
const routes = require('./controllers/burger_controllers');

>>>>>>> b20f5d9d7f3836343829e8e8bce95ae41d0be176
const app = express();
const routes = require('./controllers/burgers_controller');
// env variables
<<<<<<< HEAD
const PORT = process.env.PORT || 5000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.engine('handlebars',exphbs({
    defaultLayout:'main'}));
=======
const PORT = process.env.PORT || 8080;

>>>>>>> b20f5d9d7f3836343829e8e8bce95ae41d0be176

//static content for app
app.use(express.static('public'));

//apps as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//routes

app.use(routes);
//start the server
app.listen(PORT, () =>
console.log(`Server listening on : http://localhost:${PORT}`)
);