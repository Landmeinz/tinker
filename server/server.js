require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');
const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

// fucking cors //
app.use(cors());
app.options('*', cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ----- Routes ----- //
// const userRouter = require('./routes/user.router');
const messageRouter = require('./routes/message.router');
const currentDateRouter = require('./routes/current_date.router');
const weeklyFormRouter = require('./routes/weeklyForm.router');
// app.use('/api/user', userRouter);
app.use('/api/messages', messageRouter);
app.use('/api/date', currentDateRouter);
app.use('/api/weeklyForm', weeklyFormRouter);

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
