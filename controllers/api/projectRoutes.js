const router = require('express').Router();
const { Category, Date, Equipment, Exercise, Muscle, Rep, User, Weight, WorkoutPlan } = require('../../models');
const withAuth = require('../../utils/auth');

require('dotenv').config();

// GET ROUTES - READ
router.get('/category', async (req, res) => {
  try {
    const category = await Category.findAll({});
    console.log('Categories Found!');
    res.status(200).json({ message: 'Categories Retrieved Successfully!', category: category });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/date', async (req, res) => {
  try {
    const date = await Date.findAll({});
    console.log('Dates Found!');
    res.status(200).json({ message: 'Dates Retrieved Successfully!', date: date });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/equipment', async (req, res) => {
  try {
    const equipment = await Equipment.findAll({});
    console.log('Equipment Found!');
    res.status(200).json({ message: 'Equipment Retrieved Successfully!', equipment: equipment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/exercise', async (req, res) => {
  try {
    const exercise = await Exercise.findAll({});
    console.log('Exercises Found!');
    res.status(200).json({ message: 'Exercises Retrieved Successfully!', exercise: exercise });
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
    res.status(200).json({ message: `Exercises for Category: ${selectedCategory} Retrieved Successfully!`, exercises: exercises });
  } catch (error) {
    console.error('Error Fetching Exercises For Selected Category in GET Route:', error);
    res.status(500).json({ message: error.message });
  }
});

router.get('/muscle', async (req, res) => {
  try {
    const muscle = await Muscle.findAll({});
    console.log('Muscles Found!');
    res.status(200).json({ message: 'Muscles Retrieved Successfully!', muscle: muscle });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/rep', async (req, res) => {
  try {
    const rep = await Rep.findAll({});
    console.log('Reps Found!');
    res.status(200).json({ message: 'Reps Retrieved Successfully!', rep: rep });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/user', async (req, res) => {
  try {
    const user = await User.findAll({});
    console.log('Users Found!');
    res.status(200).json({ message: 'Users Retrieved Successfully!', user: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/weight', async (req, res) => {
  try {
    const weight = await Weight.findAll({});
    console.log('Weights Found!');
    res.status(200).json({ message: 'Weights Retrieved Successfully!', weight: weight });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/workout', async (req, res) => {
  try {
    const workout = await WorkoutPlan.findAll({});
    console.log('Workout Plans Found!');
    res.status(200).json({ message: 'Workout Plans Retrieved Successfully!', workout: workout });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST ROUTES - CREATE
router.post('/category', async (req,res) => {
  try {
    const newCategory = await Category.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json({ message: 'New Category Has Been Created!', newCategory: newCategory });
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
    res.status(200).json({ message: 'New Date Has Been Created!', newDate: newDate });
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
    res.status(200).json({ message: 'New Equipment Has Been Created!', newEquipment: newEquipment });
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
    res.status(200).json({ newExercise: newExercise, message: 'New Exercise Has Been Created!' });
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
    res.status(200).json({ message: 'New Muscle Has Been Created!', newMuscle: newMuscle });
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
    res.status(200).json({ message: 'New Rep Has Been Created!', newRep: newRep });
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
    res.status(200).json({ message: 'New User Has Been Created!', newUser: newUser });
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
    res.status(200).json({ message: 'New Weight Has Been Created!', newWeight: newWeight });
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
    res.status(200).json({ message: 'New Workout Plan Has Been Created!', newWorkout: newWorkout });
  } catch (error) {
    res.status(500).json(error);
  }
});

// PATCH ROUTES - UPDATE
// Update Workout Plan

// DELETE ROUTES - DELETE
// Delete Workout Plan

module.exports = router;