const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router.js');
const plantRouter = require('./routes/plant.router.js');
const photoRouter = require('./routes/photo.router.js');
const current_dateRouter = require('./routes/current_date.router.js');
const userListRouter = require('./routes/userList.router.js');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user',  userRouter);
app.use('/api/plant', plantRouter);
app.use('/api/photo', photoRouter);
app.use('/api/current_date', current_dateRouter);
app.use('/api/userList', userListRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5050;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
