const router = require('express').Router();
const {  } = require('../models');
const withAuth = require('../utils/auth');

// GET route for the homepage
router.get('/', async (req, res) => {
    try {
        const recentPosts = await Post.findAll({ limit: 5, order: [['createdAt', 'DESC']] });
        res.render('homepage', { posts: recentPosts, loggedIn: req.session.loggedIn  
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to load homepage' });
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
    res.render('login');
  });


module.exports = router;