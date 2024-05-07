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

module.exports = WorkoutPlan;