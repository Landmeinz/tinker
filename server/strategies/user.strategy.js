const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

passport.use('local', new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  pool.query('SELECT * FROM "user" WHERE email = $1', [email])
    .then((result) => {
      const user = result && result.rows && result.rows[0];

      if (user && encryptLib.comparePassword(password, user.password)) {
        // passwords match
        console.log(`--- user.strategy user passwords match: ${user.email} ---`);
        done(null, user);
      } else {
        // user not found
        console.log(`--- user.strategy user password no good ---`);
        done(null, null);
      }
    })
    .catch((error) => {
      console.log(`--- user.strategy catch error ---`);
      done(error, null);
    })
}));

passport.serializeUser((user, done) => {
  console.log('--- serializeUser:', user, '---');
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('--- deserializeUser ---');
  pool.query(`SELECT * FROM "user" WHERE id = $1`, [id])
    .then((result) => {
      // handle errors
      const user = result && result.rows && result.rows[0];
      if (user) {
        // user found
        console.log(`--- deserializeUser user found email: ${user.email} ---`);
        delete user.password;
        done(null, user);
      } else {
        // user not found
        console.log(`--- deserializeUser no user found ---`);
        done(null, null);
      }
    })
    .catch((error) => {
      console.log(`--- deserializeUser catch error ---`);
      done(error, null);
    })
});

// passport.deserializeUser((id, done) => {
//   pool
//     .query('SELECT * FROM "user" WHERE id = $1', [id])
//     .then((result) => {
//       // Handle Errors
//       const user = result && result.rows && result.rows[0];

//       if (user) {
//         // user found
//         delete user.password; // remove password so it doesn't get sent
//         // done takes an error (null in this case) and a user
//         done(null, user);
//       } else {
//         // user not found
//         // done takes an error (null in this case) and a user (also null in this case)
//         // this will result in the server returning a 401 status code
//         done(null, null);
//       }
//     })
//     .catch((error) => {
//       // console.log('Error with query during deserializing user ', error);
//       // done takes an error (we have one) and a user (null in this case)
//       // this will result in the server returning a 500 status code
//       done(error, null);
//     });
// });

// // Does actual work of logging in
// passport.use('local', new LocalStrategy((username, password, done) => {
//     pool
//       .query('SELECT * FROM "user" WHERE email = $1', [username])
//       .then((result) => {
//         const user = result && result.rows && result.rows[0];
//         console.log('--- user.strategy.js result user:', user);

//         if (user && encryptLib.comparePassword(password, user.password)) {
//           // All good! Passwords match!
//           // done takes an error (null in this case) and a user
//           done(null, user);
//         } else {
//           // Not good! Username and password do not match.
//           // done takes an error (null in this case) and a user (also null in this case)
//           // this will result in the server returning a 401 status code
//           done(null, null);
//         }
//       })
//       .catch((error) => {
//         // console.log('Error with query for user ', error);
//         // done takes an error (we have one) and a user (null in this case)
//         // this will result in the server returning a 500 status code
//         done(error, null);
//       });
//   })
// );

module.exports = passport;
