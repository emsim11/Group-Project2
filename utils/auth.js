const withAuth = (req, res, next) => {
    // If User Isn't Logged In, Redirect Request to Login Route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
};
  
module.exports = withAuth;