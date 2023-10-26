require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('./strategies/user.strategy');
const app = express();

// ----- Routes ----- //
const userRouter = require('./routes/user.router');
const messagesRouter = require('./routes/messages.router');
const currentDateRouter = require('./routes/currentDate.router');
const weeklyFormsRouter = require('./routes/weeklyForms.router');

// Body parser middleware //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// start up passport sessions //
// Passport Session Configuration //
app.set('trust proxy', 1) // trust first proxy
const sessionMiddleware = require('./modules/sessionMiddleware');
app.use(sessionMiddleware);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// fucking CORS //
const corsOptions = {
  origin: ['http://localhost:3000', 'https://www.tinker.group/'],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
};
app.use(cors(corsOptions));
app.options('*', cors());

// ----- Routes ----- //
app.use('/api/user', userRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/date', currentDateRouter);
app.use('/api/weeklyForms', weeklyFormsRouter);

// App Set PORT //
app.set('PORT', process.env.PORT || 5050);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}
else{
  console.log(`--- env: ${process.env.NODE_ENV} ---`);
}

// ----- Listen ----- //
app.listen(app.get('PORT'), () => {
  console.log(`--- server listening on port ${app.get('PORT')} ---`)
});
