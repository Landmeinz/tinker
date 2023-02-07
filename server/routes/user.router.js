const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});



// lets get all users for metrics
router.get('/all', rejectUnauthenticated, (req, res) => {
  if (req.user.is_admin) {
    const queryText = `
      SELECT 	COUNT(username) as "user_count"
      FROM 	  "user"
      WHERE 	"is_admin" = false ; ` ;

    pool.query(queryText)
      .then(result => {
        res.send(result.rows); // Contains all previous challenges
      })
      .catch(err => {
        // console.log('ERROR in router.GET/user/all', err);
        res.sendStatus(500);
      })
  } else {
    // console.log('ERROR in router.get/user/all check admin status');
  }
});



// Handles POST request with new user data;
// The password gets encrypted before being inserted;
router.post('/register', (req, res) => {
  // console.log('--- router.post req.body', req.body);
  const username = req.body.username;
  const email = req.body.email
  const password = encryptLib.encryptPassword(req.body.password);
  const bio = req.body.bio;
  const pic = req.body.pic;
  const location = req.body.location
  const birthday = req.body.birthday;
  const gender = req.body.gender;
  const maritalStatus = req.body.maritalStatus;
  const familySize = req.body.familySize;
  const isAdmin = req.body.isAdmin;

  const queryText = `
    INSERT INTO   "user" 
      ("username", "email", "password", "bio", "pic", "location", "birthday", "gender", "marital_status", "family_size", "is_admin")
    VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING "id" ; `;

  const queryText2 = `
  INSERT INTO "user_metrics" (user_id, metric_id, goal)
  VALUES ($1, 1, 0), ($1, 2, 0), ($1, 3, 0);
  `;

  let values = [username, email, password, bio, pic, location, birthday, gender, maritalStatus, familySize, isAdmin]

  pool
    .query(queryText, values)
    .then(result => {
      const createdComboId = result.rows[0].id;
      // console.log('this is createdComboId:', createdComboId);
      pool.query(queryText2, [createdComboId])
        .then(result => {
          res.sendStatus(201);
        })
        // catch for 2nd query
        .catch(err => {
          // console.log('err', err);
          res.sendStatus(500);
        })

    })
    .catch((err) => {
      // console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});


// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});


// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;