// TODO: Add Back in withAuth to Router Methods
const router = require('express').Router();
const { Category, Date, Equipment, Exercise, Muscle, Rep, User, Weight, WorkoutPlan } = require('../../models');
const withAuth = require('../../utils/auth');

require('dotenv').config();

// GET ROUTES - READ
router.get('/category', async (req, res) => {
  try {
    const category = await Category.findAll({});
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/date', async (req, res) => {
  try {
    const date = await Date.findAll({});
    res.json(date);
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

router.get('/exercise', async (req, res) => {
  try {
    const exercise = await Exercise.findAll({});
    res.json(exercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/muscle', async (req, res) => {
  try {
    const muscle = await Muscle.findAll({});
    res.json(muscle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/rep', async (req, res) => {
  try {
    const rep = await Rep.findAll({});
    res.json(rep);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/user', async (req, res) => {
  try {
    const user = await User.findAll({});
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/weight', async (req, res) => {
  try {
    const weight = await Weight.findAll({});
    res.json(weight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/workout', async (req, res) => {
  try {
    const workout = await WorkoutPlan.findAll({});
    res.json(workout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST ROUTES - CREATE
router.post('/category', async (req, res) => {
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

router.post('/date', async (req, res) => {
  try {
    const newDate = await Date.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newDate);
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

router.post('/exercise', async (req, res) => {
  try {
    const newExercise = await Exercise.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newExercise);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/muscle', async (req, res) => {
  try {
    const newMuscle = await Muscle.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newMuscle);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/rep', async (req, res) => {
  try {
    const newRep = await Rep.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newRep);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/user', async (req, res) => {
  try {
    const newUser = await User.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/weight', async (req, res) => {
  try {
    const newWeight = await Weight.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newWeight);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/workout', async (req, res) => {
  try {
    const newWorkout = await WorkoutPlan.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Middleware to Create Exercises List
// Create Workout Plan

// PATCH ROUTES
// Update Workout Plan

// DELETE ROUTES
// Delete Workout Plan

// Middleware to Get Workout Plan

module.exports = router;