const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

const dbURI = 'mongodb+srv://basilomsha:<password>@cluster0.gyg49zi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then(result => console.log("Database connected"))
    .catch(error => console.log(error));

const User = require('./models/User');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening port ${PORT}`));