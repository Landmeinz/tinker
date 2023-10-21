const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();


// ----- GET ----- //
router.get('/', (req, res) => {
  // console.log('in message.router');

  let queryText = `
    SELECT 	  *
    FROM 	    "messages"
    ORDER BY  "id" DESC; `;

  // let userId = [req.user.id];

  pool.query(queryText)
    .then(result => {
      // console.log('--- router.GET /api/message result.rows', result.rows);
      res.send(result.rows);

    }).catch(error => {
      console.log('ERROR router.GET /api/message', error);
      res.sendStatus(500);
    });
});


// ----- POST ----- //
router.post('/', (req, res) => {

  const newMessage = req.body;

  const sqlText = `
    INSERT INTO "messages"
      (name, message, date)
      VALUES ($1, $2, $3)`;

  let values = [newMessage.name, newMessage.message, newMessage.date];

  pool
    .query(sqlText, values)
    .then((response) => {
      res.sendStatus(201);

    })
    .catch((error) => {
      console.log(`--- POST Error  to database: ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
