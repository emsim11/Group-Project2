const router = require('express').Router();
const { Date, Equipment, Exercise, index, Muscle, Rep, User, Weight, Category, WorkoutPlan } = require('../models');
const withAuth = require('../utils/auth');

// TODO: Double Check This Code Applies to Our Application Properly (GET Route For the Homepage)
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
    // If the User is Already Logged In, Redirect the Request to Homepage
    if (req.session.loggedIn) {
      res.redirect('/homepage');
      return;
    }
    res.render('login');
  });

module.exports = router;