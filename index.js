const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcrypt');
require('./helpers/passport.js');
require('dotenv').config();

const dbURI = 'mongodb+srv://' + process.env.DBUSER + ':' + process.env.DBPASSWD + '' + process.env.CLUSTER + '.mongodb.net/' + process.env.DB + '?retryWrites=true&w=majority';
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(dbURI, dbOptions)
    .then(result => console.log("Database connected"))
    .catch(error => console.log(error));

const app = express();
// iniPassport.auth();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(flash());
const sessionStore = MongoStore.create({
    mongoUrl: dbURI, mongoOptions: dbOptions, collection: 'session'
});
app.use(session({
    secret: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        maxAge: 14 * 24 * 60 * 60 // = 14 days. Default
    }
}));

app.use(passport.initialize());
// app.use(passport.session());
app.use(passport.authenticate('session'));
app.use((req, res, next) => {
    // if(req.session.passport.user !== null)
    console.log(req.session);
    console.log(req.user);
    next();
});

app.use('', require('./routes/routes.js'));

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening port ${PORT}`));