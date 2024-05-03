const router = require('express').Router();
const { Project } = require('../models'); // Import the Project and User models
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
        // User is logged in, redirect to the homepage
        res.redirect('/homepage');
    } else {
        // User is not logged in, redirect to the login screen
        res.redirect('/loginpage');
    }
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/homepage', withAuth, async (req, res) => {
    try {
      res.render('homepage', { username: req.session.username });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
          }
});

module.exports = router;