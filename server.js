//require express
const express = require('express');
const path = require('path');
const routes = require('./controllers/burger_controllers.js');
//handlebars
const exphbs = require('express-handlebars');
const app = express();
// env variables
const PORT = process.env.PORT || 8080;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.engine('handlebars',exphbs({
    defaultLayout:'main'}));

//static content for app
app.use(express.static(__dirname + "/public"));

//apps as JSON
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());



//routes

app.use(routes);
//start the server
app.listen(PORT, () =>
console.log(`Server listening on : http://localhost:${PORT}`)
);