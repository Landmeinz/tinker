const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('--- hit get user.router.js ---');
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// WHERE 	"is_admin" = false 
// lets get all users
router.get('/all', rejectUnauthenticated, (req, res) => {
  // console.log('--- hit get api/user/all user.router ---');
  const queryText = `
      SELECT 	*
      FROM 	  "user"
      ORDER BY "id" ` ;

  pool.query(queryText)
    .then(result => {
      res.send(result.rows); // Contains all previous challenges
      // console.log('--- result', result.rows);

    })
    .catch(err => {
      // console.log('ERROR in router.GET/user/all', err);
      res.sendStatus(500);
    })
});


// Handles POST request with new user data;
// The password gets encrypted before being inserted;
router.post('/register', (req, res) => {

  console.log('--- hit /register in user.router.js');

  const email = req.body.email
  const name = req.body.name
  const password = encryptLib.encryptPassword(req.body.password);
  const profession = '';
  const interests = '';
  const location = '';
  const activeMember = true;
  const activeDate = 'NOW()';
  const admin = false;

  const sqlText = `
    INSERT INTO   "user" 
      ("email", "name", "password", "profession", "interests", "location", "active_date", "active_member", "admin")
    VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8, $9); `;

  let values = [email, name, password, profession, interests, location, activeDate, activeMember, admin]

  pool
    .query(sqlText, values)
    .then((response) => {
      res.sendStatus(201);

    })
    .catch((error) => {
      console.log(`POST Error  to database: ${sqlText}`, error);
      res.sendStatus(500);
    });
});



router.post('/login', userStrategy.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
  // This callback function will only be called if authentication succeeds
  res.status(200).send('You have successfully logged in!');
});


// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
// router.post('/login', userStrategy.authenticate('local'), (req, res) => {
//   console.log('--- hit /login in user.route.js ---');
//   res.render('login');
//   res.sendStatus(200);
//   successRedirect: '/';
//   failureRedirect: '/login';
//   console.log('--- END /login ---');
// });
  // console.log('--- req:', req);
  // res.render('login');
  // res.json({
  //   message: err.message,
  //   error: err
  // });



// clear all server session information about this user
router.post('/logout', (req, res) => {
  console.log('--- hit /logout in user.router.js ---');
  // Use passport's built-in method to log out the user
  // req._destroy();
  // req.destroy();
  // req.logOut();
  req.session = null;
  req.logout();
  res.sendStatus(200);
});

module.exports = router;