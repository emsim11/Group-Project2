/* Middleware To Check Login – If Logged In, Continues to 
Next Router or Middleware, Otherwise Sends to Login Page */

const withAuth = (req, res, next) => {
    if (req.session.logged_in) {
      next();
    } else {
      res.redirect('/login');
    }
};
  
module.exports = withAuth;