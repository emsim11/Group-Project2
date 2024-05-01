const router = require('express').Router();
const Sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { Date, Equipment, Exercise, index, Muscle, RepUnit, User, WeightUnit, WorkoutCategory, WorkoutPlan } = require('../../models');

// Homepage Route to Display User's Dashboard With All Posts
router.get('/homepage', withAuth, async (req, res) => {
  try {
    // Render the Dashboard Template
    res.render('homepage', { username: req.session.username });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      });

// Dashboard Route to Handle Logout
router.post('/logout', withAuth, (req, res) => {
    req.session.destroy(() => {
      res.redirect('/');
    });
});

module.exports = router;