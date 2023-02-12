const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// ----- GET ----- //
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('--- hit weeklyForm.router.js');

  let queryText = `
    SELECT 	  user_id, name, complete_goal, present_items, items, ideas, research, tasks_completed, blockers, learned, next_goals, difficultly, to_char(date, 'yyyy-mm-dd @ hh:mi:ss') as date
    FROM 	    "weeklyforms"
    WHERE date > current_date - interval '7 days'
    ORDER BY  "date"; `;

  // let userId = [req.user.id];

  pool.query(queryText)
    .then(result => {
      // console.log('--- weeklyForms.router.js query result:', result.rows);
      res.send(result.rows);

    }).catch(error => {
      console.log('ERROR router.GET /api/weeklyForms', error);
      res.sendStatus(500);
    });
});


// ----- POST ----- //
router.post('/', rejectUnauthenticated, (req, res) => {

  console.log('hit post route in form.router.js');
  
  const form = req.body;

  const sqlText = `
      INSERT INTO weeklyforms
      (user_id, name, complete_goal, present_items, items, ideas, research, tasks_completed, blockers, learned, next_goals, difficultly, date)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;

  let values = [1, form.name, form.completeGoal, form.presentItems, form.items, form.ideas, form.research, form.tasksCompleted, form.blockers, form.learned, form.nextGoals, form.difficultly, form.date ];

  pool
    .query(sqlText, values)
    .then((response) => {
      console.log('response in form.router.js', response);
      
      res.sendStatus(201);

    })
    .catch((error) => {
      console.log(`POST Error  to database: ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
