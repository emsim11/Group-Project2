const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');
const Date = require('./Date');
const Exercise = require('./Exercise');

class WorkoutPlan extends Model {}

WorkoutPlan.init(
  {
    WorkoutPlan_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Exercise_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Exercise_Description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Exercise_Image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Workout_Plans'
  }
);

WorkoutPlan.belongsToMany(Exercise, { through: 'WorkoutPlanExercises' });

async function createAndRetrieveWorkoutPlan() {
  const newWorkoutPlan = await WorkoutPlan.create({
    Date: '2024-10-15',
    Exercises: [1, 2, 3]
  });

newWorkoutPlan.then((createdWorkoutPlan) => {
  console.log('New Workout Plan created:');
  console.log(createdWorkoutPlan.toJSON());
}).catch((error) => {
  console.error('Error creating new Workout Plan:', error);
});

const workoutPlanId = 1;

const workoutPlanWithExercises = await WorkoutPlan.findByPk(workoutPlanId, {
  include: Exercises
});

workoutPlanWithExercises.then((result) => {
  if (result) {
    console.log('Workout Plan with Exercises:');
    console.log(result.toJSON());
  } else {
    console.error('Workout Plan not found.');
  }
}).catch((error) => {
  console.error('Error retrieving Workout Plan with Exercises:', error);
});

WorkoutPlan.sync();
}

module.exports = WorkoutPlan;