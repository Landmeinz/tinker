require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const passport = require('./strategies/user.strategy');
const app = express();

// ----- Routes ----- //
const userRouter = require('./routes/user.router');
const messagesRouter = require('./routes/messages.router');
const currentDateRouter = require('./routes/currentDate.router');
const weeklyFormsRouter = require('./routes/weeklyForms.router');

const sessionMiddleware = require('./modules/sessionMiddleware');
app.use(sessionMiddleware);

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
// app.use(sessionMiddleware);

// start up passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

// fucking cors //
app.use(cors());
app.options('*', cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ----- Routes ----- //
app.use('/api/user', userRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/date', currentDateRouter);
app.use('/api/weeklyForms', weeklyFormsRouter);

// App Set //
app.set("port", process.env.PORT || 5050);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

// ----- Listen ----- //
app.listen(app.get("port"), () => {
  console.log(`server connected at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
