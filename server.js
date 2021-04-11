//require express
const express = require('express');

// env variables
const PORT = process.env.PORT || 8080;
const app = express();
//static content for app
app.use(express.static('public'));

//apps as JSON
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
//handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs( { defaultLayout: 'main' } ));
app.set('view engine', 'handlebars');
//routes
const routes = require('./controllers/burger_controllers');
app.use(routes);
//start the server
app.listen(PORT, () =>
console.log(`Server listening on : http://localhost:${PORT}`)
);