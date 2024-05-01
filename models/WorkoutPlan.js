const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class WorkoutPlan extends Model {}

// Define the WorkoutPlanner model
WorkoutPlan.init(
  {
  // Define the attributes of the WorkoutPlanner model
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  // Define any other attributes specific to the WorkoutPlanner model
  // duration, image, video link - what else is needed? are these needed?
  //
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'WorkoutPlan'
}
);


module.exports = WorkoutPlan;