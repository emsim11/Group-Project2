const express = require('express');
const { User } = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt');

// POST ROUTES
router.post('/login', async (req, res) => {
    console.log('Login reached');
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData);

        if (!userData || !userData.checkPassword(req.body.password)) {
            console.log(userData);
            res.status(400).json({ message: 'Invalid email or password' });
            return;
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.logged_in = true;
            res.status(200).json({ user: userData, message: 'Login successful' });
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Failed to login' });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        });

        res.redirect('/loginpage');

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Failed to register user' });
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
            res.redirect('/');
        });
    } else {
        res.status(404).end();
    }
});

// GET ROUTES
router.get('/loginpage', (req, res) => {
    res.render('login', { loggedIn: req.session.loggedIn });
});

router.get('/createaccount', (req, res) => {
    res.render('signup');
});

module.exports = router;