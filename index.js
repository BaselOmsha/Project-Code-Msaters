const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const handlebars = require("handlebars");
require('./helpers/passport');
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
// To store session data in a MongoDB database. This allows session data to persist even if the server is restarted.
const sessionStore = MongoStore.create({
    mongoUrl: dbURI, mongoOptions: dbOptions, collection: 'session'
});
// Create a session to keep track of user data across requests
app.use(session({
    secret: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        // maxAge: 14 * 24 * 60 * 60 // = 14 days. Default
        maxAge: 3600000 // 1 hour
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

handlebars.registerHelper("eq", function (a, b) {
    return a === b;
});

app.use('', require('./routes/routes.js'));

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening port ${PORT}`));