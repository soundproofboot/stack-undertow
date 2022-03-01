// for path names
const path = require('path');
// for api routes
const express = require('express');
// to build user sessions
const session = require('express-session');
// to use handlebars templates
const exphbs = require('express-handlebars');
// to work with date and time
const helpers = require('./utils/helpers');

// set up express app
const app = express();
// use port 3001 or whatever the assigned port is from .env
const PORT = process.env.PORT || 3001;

// ORM to interact with db
const sequelize = require('./config/connection');
// used to handle user sessions in db
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'secret',
  cookie: {
    maxAge: 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// add that session functionality to express app
app.use(session(sess));

// set up handlebars engine to use helpers
const hbs = exphbs.create({ helpers });

// set engine to use handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// set express to use json, set up static routes folder
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// set up app to use all the routes set up in controllers folder
app.use(require('./controllers'));

// synce to db, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Listening...'));
});