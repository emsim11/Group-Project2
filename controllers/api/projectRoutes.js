const router = require('express').Router();
const Workout = require('../../models/Exercise');
const withAuth = require('../../utils/auth');

// API CONTROLLER:

// GET ROUTE to Retrieve List of Exercises as JSON
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET ROUTE to Retrieve List of Workout Categories as JSON
router.get('/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// GET ROUTE to Retrieve List of Muscle Groups as JSON
router.get('/muscle_groups', async (req, res) => {
  try {
    const muscle_groups = await MuscleGroup.find();
    res.json(muscle_groups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// GET ROUTE to Retrieve List of Equipments as JSON
router.get('/equipment', async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// GET ROUTE to Retrieve List of Reps Units as JSON
router.get('/rep_units', async (req, res) => {
  try {
    const rep_units = await RepUnit.find();
    res.json(rep_units);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// GET ROUTE to Retrieve List of Weights Units as JSON
router.get('/weight_units', async (req, res) => {
  try {
    const weight_units = await WeightUnit.find();
    res.json(weight_units);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// GET ROUTE to Retrieve List of Past Workouts as JSON
router.get('/past_workouts', async (req, res) => {
  try {
    const past_workouts = await PastWorkout.find();
    res.json(past_workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// MAY NOT NEED THIS
// Get a workout by id
router.get('/:id', getWorkout, (req, res) => {
  res.json(res.workout);
});


// POST Route to Create a New Workout
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
router.delete('/:id', getWorkout, async (req, res) => {
  try {
    await res.workout.remove();
    res.json({ message: 'Workout deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// I don't think we need this as workouts won't have searchable id's right?
//
// // Middleware to get workout by id
async function getWorkout(req, res, next) {
  let workout;

  try {
    workout = await Workout.findById(req.params.id);
    if (workout == null) {
      return res.status(404).json({ message: 'Cannot find workout' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.workout = workout;
  next();
}

module.exports = router;