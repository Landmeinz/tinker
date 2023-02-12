const rejectUnauthenticated = (req, res, next) => {
  console.log('--- req.isAuthenticated():', req.isAuthenticated());  
  if (req.isAuthenticated()) {
    // They were authenticated! User may do the next thing
    // Note! They may not be Authorized to do all things
    console.log('--- authenticated! ---');
    next();
  } else {
    // failure best handled on the server. do redirect here.
    console.log('--- reject unauthenticated ---');
    res.sendStatus(403);
  }
};

module.exports = { rejectUnauthenticated };
