const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const passport = require('passport');
const connectDB = require('./config/db')
require('dotenv').config()

const app = express();

// Passport Config
require('./config/passport')(passport);

// Connect to MongoDB
connectDB()

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Static Folder
app.use('/public', express.static('public'))

// Express Session
app.use(session({
    secret: 'Blah going which master like',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.error_msg_logged = req.flash('error_msg_logged');  // to inform alredy logged in messages
    res.locals.error_msg_email = req.flash('error_msg_email');
    next();
})

// Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))
app.use('/ngo', require('./routes/ngo'))
app.use('/search', require('./routes/search'))
app.use('/helpline', require('./routes/helpline'))

// 404
app.use((req, res, next) => {
    res.status(404).render('404');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`));