const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require("dotenv").config();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
var path = require('path');

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var adminRouter = require("./routes/admin");

// custom imports
const { mongooseConnection } = require('./config/database');

const app = express();
app.use(express.urlencoded({ extended: false }));

// connecting to mongoDB
mongooseConnection();
// app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));

// middleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

// Passport Config
require('./config/passport')(passport);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Express Session
app.use(
  session({
    secret: 'nouman',
    resave: true,
    saveUninitialized: true,
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());
// import routes

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error'); // Error from Passport
  res.locals.user = req.user;
  next();
});


app.use("/", indexRouter);
app.use("/api/", apiRouter);
app.use("/admin/", adminRouter);


// listening to the app
const server = app.listen(process.env.PORT, () => {
  console.log(`app is working on http://localhost:${process.env.PORT}`);
});
