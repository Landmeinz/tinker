const { LivingOutlined } = require('@mui/icons-material');
const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {

  console.log('--- in router.GET /api/message');

  let queryText = `
    SELECT 	  *
    FROM 	    "messages"
    ORDER BY  "id" DESC; `;

  // let userId = [req.user.id];

  pool.query(queryText)
    .then(result => {
      console.log('--- router.GET /api/message result.rows', result.rows);
      res.send(result.rows);
    }).catch(error => {
      console.log('ERROR router.GET /api/message', error);
      res.sendStatus(500);
    });

    console.log('--- this worked');
});



/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
