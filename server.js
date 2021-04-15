//require express
const express = require('express');
const path = require('path');
const routes = require('./controllers/burger_controllers');

const app = express();
// env variables
const PORT = process.env.PORT || 8080;


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