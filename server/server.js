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
app.use(cors());

const sessionMiddleware = require('./modules/session-middleware');
app.use(sessionMiddleware);

// Serve static files //
app.use(express.static('build'));

// ----- Routes ----- //
const messageRouter = require('../server/routes/message.router');
const currentDateRouter = require('../server/routes/current_date.router');
app.use('/api/message', messageRouter);
app.use('/api/date', currentDateRouter);

// App Set //
const PORT = process.env.PORT || 5050;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
