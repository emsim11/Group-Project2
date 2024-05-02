const express = require('express');
const { User } = require('../models');
const router = express.Router();

// GET Route For User Login Form View Rendering
router.get('/login', (req, res) => {
    res.render('login', { loggedIn: req.session.loggedIn });
});

// POST Route For User Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData || !userData.checkPassword(req.body.password)) {
            res.status(400).json({ message: 'Invalid email or password' });
            return;
        } else {
            console.log('Welcome back! You are now logged in.');
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;
            res.status(200).json({ user: userData, message: 'Login successful' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to login' });
    }
});

// GET Route For User Registration Form View Rendering
router.get('/signup', (req, res) => {
    res.render('signup', { loggedIn: req.session.loggedIn });
});

// POST Route For User Registration Form Submission Handling
router.post('/signup', async (req, res) => {
    try {
        // Extract User Input From the Registration Form
        const { first_name, last_name, email, password } = req.body;

        // Validate User Input (e.g., Check For Empty Fields, Validate Email Format)

        // Check if the User Already Exists in the Database
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the User's Password For Security
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a New User Record in the Database
        const newUser = await User.create({
            first_name,
            last_name,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to register user' });
    }
});

// POST Route For User Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;