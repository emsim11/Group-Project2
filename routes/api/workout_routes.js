const express = require('express');
const router = express.Router();

// Import the Workout model
const Workout = require('../models/Workout');


// Get all workouts
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get a workout by id
router.get('/:id', getWorkout, (req, res) => {
  res.json(res.workout);
});


// Create a new workout
router.post('/', async (req, res) => {
  const workout = new Workout({
    name: req.body.name,
    exercises: req.body.exercises
  });

  try {
    const newWorkout = await workout.save();
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Update a workout
router.patch('/:id', getWorkout, async (req, res) => {
  if (req.body.name!= null) {
    res.workout.name = req.body.name;
  }

  if (req.body.exercises!= null) {
    res.workout.exercises = req.body.exercises;
  }

  try {
    const updatedWorkout = await res.workout.save();
    res.json(updatedWorkout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Do we need this?
//
// Delete a workout
// router.delete('/:id', getWorkout, async (req, res) => {
//   try {
//     await res.workout.remove();
//     res.json({ message: 'Workout deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// I don't think we need this as workouts won't have searchable id's right?
//
// // Middleware to get workout by id
// async function getWorkout(req, res, next) {
//   let workout;

//   try {
//     workout = await Workout.findById(req.params.id);
//     if (workout == null) {
//       return res.status(404).json({ message: 'Cannot find workout' });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.workout = workout;
//   next();
// }

module.exports = router;