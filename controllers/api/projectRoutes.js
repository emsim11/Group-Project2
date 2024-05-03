const router = require('express').Router();
const { Category, Date, Equipment, Exercise, Muscle, Rep, User, Weight, WorkoutPlan } = require('../../models');
const withAuth = require('../../utils/auth');

require('dotenv').config();

// GET ROUTES - READ
router.get('/exercises', withAuth, async (req, res) => {
  try {
    const exercises = await Exercise.find({});
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add Back in withAuth
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll({});
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/muscles', withAuth, async (req, res) => {
  try {
    const muscles = await Muscle.findAll({});
    res.json(muscles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add Back in withAuth
router.get('/equipment', async (req, res) => {
  try {
    const equipment = await Equipment.findAll({});
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/reps', withAuth, async (req, res) => {
  try {
    const reps = await Rep.findAll({});
    res.json(reps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/weights', withAuth, async (req, res) => {
  try {
    const weights = await Weight.findAll({});
    res.json(weights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/workouts', withAuth, async (req, res) => {
  try {
    const workouts = await WorkoutPlan.findAll({});
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST ROUTES - CREATE
router.post('/equipment', withAuth, async (req, res) => {
  try {
    const newEquipment = await Equipment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEquipment);
  } catch (err) {
    res.status(500).json(err);
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