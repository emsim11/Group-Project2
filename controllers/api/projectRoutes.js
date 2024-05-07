const router = require('express').Router();
const { Category, Date, Equipment, Exercise, Muscle, Rep, User, Weight, WorkoutPlan } = require('../../models');
const withAuth = require('../../utils/auth');

require('dotenv').config();

// TODO: Add Back in withAuth to Router Methods
// NOTE: http://localhost:3001/api/projects/ is the URL Base Link

// GET ROUTES - READ
router.get('/category', async (req, res) => {
  try {
    const category = await Category.findAll({});
    console.log('Categories Found!');
    res.status(200).json({ category: category, message: 'Categories Retrieved Successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/date', async (req, res) => {
  try {
    const date = await Date.findAll({});
    console.log('Dates Found!');
    res.status(200).json({ date: date, message: 'Dates Retrieved Successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/equipment', async (req, res) => {
  try {
    const equipment = await Equipment.findAll({});
    console.log('Equipment Found!');
    res.status(200).json({ equipment: equipment, message: 'Equipment Retrieved Successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/exercise', async (req, res) => {
  try {
    const exercise = await Exercise.findAll({});
    console.log('Exercises Found!');
    res.status(200).json({ exercise: exercise, message: 'Exercises Retrieved Successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/exercise/:selectedCategory', async (req, res) => {
  const selectedCategory = req.params.selectedCategory;

  try {
    const exercises = await Exercise.find({ category_name: selectedCategory });

    if (!exercises) {
      return res.status(404).json({ message: 'Exercises Not Found For the Selected Category' });
    }
    res.status(200).json({ exercises, message: 'Exercises for selected category retrieved successfully' });
  } catch (error) {
    console.error('Error Fetching Exercises For Selected Category in GET Route:', error);
    res.status(500).json({ message: error.message });
  }
});

router.get('/muscle', async (req, res) => {
  try {
    const muscle = await Muscle.findAll({});
    console.log('Muscles Found!');
    res.status(200).json({ muscle: muscle, message: 'Muscles Retrieved Successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/rep', async (req, res) => {
  try {
    const rep = await Rep.findAll({});
    console.log('Reps Found!');
    res.status(200).json({ rep: rep, message: 'Reps Retrieved Successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/user', async (req, res) => {
  try {
    const user = await User.findAll({});
    console.log('Users Found!');
    res.status(200).json({ user: user, message: 'Users Retrieved Successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/weight', async (req, res) => {
  try {
    const weight = await Weight.findAll({});
    console.log('Weights Found!');
    res.status(200).json({ weight: weight, message: 'Weights Retrieved Successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/workout', async (req, res) => {
  try {
    const workout = await WorkoutPlan.findAll({});
    console.log('Workout Plans Found!');
    res.status(200).json({ workout: workout, message: 'Workout Plans Retrieved Successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST ROUTES - CREATE
router.post('/date', async (req, res) => {
  try {
    const newDate = await Date.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json({ newDate: newDate, message: 'New Date Has Been Created!' });
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
    res.status(200).json({ newWorkout: newWorkout, message: 'New Workout Plan Has Been Created!' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// PATCH ROUTES - UPDATE
// Update Workout Plan

// DELETE ROUTES - DELETE
// Delete Workout Plan

module.exports = router;