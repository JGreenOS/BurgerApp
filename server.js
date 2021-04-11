//require express
const express = require('express');
//handlebars
const exphbs = require('express-handlebars');
const app = express();
// env variables
const PORT = process.env.PORT || 8080;

app.engine('handlebars',exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//static content for app
app.use(express.static('public'));

//apps as JSON
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());



//routes
const routes = require('./controllers/burger_controllers');
app.use(routes);
//start the server
app.listen(PORT, () =>
console.log(`Server listening on : http://localhost:${PORT}`)
);