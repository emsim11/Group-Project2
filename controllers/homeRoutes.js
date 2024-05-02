const router = require('express').Router();
const { Project } = require('../models'); // Import the Project and User models
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
        // User is logged in, redirect to the homepage
        res.redirect('/homepage');
    } else {
        // User is not logged in, redirect to the login screen
        res.redirect('/login');
    }
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;