const rejectNotAdmin = (req, res, next) => {

    // check if user id logged in
    if (req.isAuthenticated()) {
        // check if user is an Admin
        if (req.user.is_admin) {
            next();
        } else {
            res.sendStatus(403)
        }
    } else {
        res.sendStatus(403)
    }
}

module.exports = { rejectNotAdmin };