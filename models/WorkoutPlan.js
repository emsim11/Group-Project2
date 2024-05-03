const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Date = require('./Date');
const Exercise = require('./Exercise');

class WorkoutPlan extends Model {}

WorkoutPlan.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  exercise: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'workoutPlan'
});

WorkoutPlan.belongsToMany(Exercise, { through: 'WorkoutPlanExercises' });

async function createAndRetrieveWorkoutPlan() {
  try {
    const newWorkoutPlan = await WorkoutPlan.create({
      date: '2024-10-15',
      exercise: [1, 2, 3]
    });
    
    console.log('New Workout Plan Created:');
    console.log(newWorkoutPlan.toJSON());

    const workoutPlanId = 1;
    const workoutPlanWithExercises = await WorkoutPlan.findByPk(workoutPlanId, { include: Exercise });
  
    if (workoutPlanWithExercises) {
      console.log('Workout Plan with Exercises:');
      console.log(workoutPlanWithExercises.toJSON());
    } else {
      console.error('Workout Plan Not Found');
    }
  } catch (error) {
  console.error('Error (WorkoutPlan.js):', error);
  }

  await WorkoutPlan.sync();
}

module.exports = WorkoutPlan;