const router = require('express').Router();
const { User, WorkoutPlan } = require('../models');
const withAuth = require('../utils/auth');
const bcrypt = require('bcrypt');

// GET ROUTES
router.get('/', withAuth, async (req, res) => {
    try {
        res.render('homepage', { username: req.session.username });
    } catch (error) {
        console.error('Error (homeRoutes.js):', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.get('/login', (req, res) => {
    res.render('login', { loggedIn: req.session.logged_in });
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/createaccount', (req, res) => {
    res.render('signup');
});

router.get('/homepage', withAuth, async(req, res) => {
    try {
        res.render('homepage', { username: req.session.username });
    } catch (error) {
        console.error('Error (homeRoutes.js):', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

router.get('/workoutplanner', (req, res) => {
    res.render('workoutPlanner');
});

router.get('/workout', (req, res) => {
    res.render('workout');
});

// POST ROUTES
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData);

        if (!userData || !userData.checkPassword(req.body.password)) {
            console.log(userData);
            res.status(400).json({ message: 'Invalid Email or Password' });
            return;
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.logged_in = true;
            res.status(200).json({ user: userData, message: 'Login Successful' });
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Failed to Login' });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            console.log('Error: User Already Exists');
            return res.status(400).json({ message: 'User Already Exists' });
        }

        const newUser = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        });

        res.redirect('/loginpage');

    } catch (error) {
        console.error('Error (homeRoutes.js):', error);
        res.status(400).json({ message: 'Failed to Register User' });
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
            res.redirect('/');
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;