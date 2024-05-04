// TODO: Add Back in withAuth to Router Methods
const router = require('express').Router();
const { Category, Date, Equipment, Exercise, Muscle, Rep, User, Weight, WorkoutPlan } = require('../../models');
const withAuth = require('../../utils/auth');

require('dotenv').config();

// GET ROUTES - READ
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll({});
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/dates', async (req, res) => {
  try {
    const dates = await Date.findAll({});
    res.json(dates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/equipment', async (req, res) => {
  try {
    const equipment = await Equipment.findAll({});
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/exercises', async (req, res) => {
  try {
    const exercises = await Exercise.findAll({});
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/muscles', async (req, res) => {
  try {
    const muscle = await Muscle.findAll({});
    console.log('Muscles Found!');
    res.json(muscle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/reps', async (req, res) => {
  try {
    const reps = await Rep.findAll({});
    res.json(reps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/weights', async (req, res) => {
  try {
    const weights = await Weight.findAll({});
    res.json(weights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/workouts', async (req, res) => {
  try {
    const workouts = await WorkoutPlan.findAll({});
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST ROUTES - CREATE
router.post('/categories', async (req, res) => {
  try {
    const newCategory = await Category.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/equipment', async (req, res) => {
  try {
    const newEquipment = await Equipment.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newEquipment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create Date
// Middleware to Create Exercises List
// Create Workout Plan

// PATCH ROUTES
// Update Workout Plan

// DELETE ROUTES
// Delete Workout Plan

// Middleware to Get Workout Plan

module.exports = router;