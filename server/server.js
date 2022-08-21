const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// const history = require('connect-history-api-fallback');
// app.use(history);

// Body parser middleware //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// fucking cors //
app.use(cors());
app.options('*', cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const sessionMiddleware = require('./modules/session-middleware');
app.use(sessionMiddleware);

// Serve static files //
app.use(express.static('build'));

// ----- Routes ----- //
const messageRouter = require('../server/routes/message.router');
const currentDateRouter = require('../server/routes/current_date.router');
app.use('/api/messages', messageRouter);
app.use('/api/date', currentDateRouter);

// App Set //
const PORT = process.env.PORT || 5050;

// ----- Listen ----- //
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
