// Import Modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Category = require('./Category');
const Date = require('./Date');
const Equipment = require('./Equipment');
const Exercise = require('./Exercise');
const Muscle = require('./Muscle');
const Rep = require('./Rep');
const User = require('./User')
const Weight = require('./Weight');
const WorkoutPlan = require('./WorkoutPlan');

Category.hasMany(Exercise, {
    foreignKey: 'category_name',
});

Exercise.belongsTo(Category, {
    foreignKey: 'category_name'
});

// WorkoutPlan.belongsToMany(Exercise, { through: 'WorkoutPlanExercises' });

// async function createAndRetrieveWorkoutPlan() {
//   try {
//     const newWorkoutPlan = await WorkoutPlan.create({
//       date: '2024-10-15',
//       exercise: [1, 2, 3]
//     });
    
//     console.log('New Workout Plan Created:');
//     console.log(newWorkoutPlan.toJSON());

//     const workoutPlanId = 1;
//     const workoutPlanWithExercises = await WorkoutPlan.findByPk(workoutPlanId, { include: Exercise });
  
//     if (workoutPlanWithExercises) {
//       console.log('Workout Plan with Exercises:');
//       console.log(workoutPlanWithExercises.toJSON());
//     } else {
//       console.error('Workout Plan Not Found');
//     }
//   } catch (error) {
//   console.error('Error (WorkoutPlan.js):', error);
//   }

//   await WorkoutPlan.sync();
// }

module.exports = { Category, Date, Equipment, Exercise, Muscle, Rep, User, Weight, WorkoutPlan }