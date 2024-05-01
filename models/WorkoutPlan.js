const { DataTypes } = require('sequelize');
const db = require('../config/connection');

const WorkoutPlanner = db.define('WorkoutPlanner', {
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
});

// Define associations with other models
WorkoutPlanner.belongsTo(User);
WorkoutPlanner.belongsTo(WorkoutCategory);

module.exports = WorkoutPlanner;