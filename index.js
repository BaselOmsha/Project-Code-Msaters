const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const handlebars = require("handlebars");

require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");

const dbURI = 'mongodb+srv://' + process.env.DBUSER + ':' + process.env.DBPASSWD + '' + process.env.CLUSTER + '.mongodb.net/' + process.env.DB + '?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then(result => console.log("Database connected"))
    .catch(error => console.log(error));


app.use('', require('./routes/routes.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening port ${PORT}`));