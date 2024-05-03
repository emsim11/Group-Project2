// Import Modules
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

const Exercise = require('./Exercise');
const Equipment = require('./Equipment');
const Muscle = require('./Muscle');
const Rep = require('./Rep');
const Weight = require('./Weight');
const Category = require('./Category');
const Date = require('./Date');
const WorkoutPlan = require('./WorkoutPlan');
const User = require('./User')

// JOIN TABLES:
const ExerciseEquipment = sequelize.define('ExerciseEquipment', { });
Exercise.belongsToMany(Equipment, { through: ExerciseEquipment });
Equipment.belongsToMany(Exercise, { through: ExerciseEquipment });

const ExerciseMuscle = sequelize.define('ExerciseMuscle', { });
Exercise.belongsToMany(Muscle, { through: ExerciseMuscle });
Muscle.belongsToMany(Exercise, { through: ExerciseMuscle });

const ExerciseRep = sequelize.define('ExerciseRep', { });
Exercise.belongsToMany(Rep, { through: ExerciseRep });
Rep.belongsToMany(Exercise, { through: ExerciseRep });

const ExerciseWeight = sequelize.define('ExerciseWeight', { });
Exercise.belongsToMany(Weight, { through: ExerciseWeight });
Weight.belongsToMany(Exercise, { through: ExerciseWeight });

const ExerciseCategory = sequelize.define('ExerciseCategory', { });
Exercise.belongsToMany(Category, { through: ExerciseCategory });
Category.belongsToMany(Exercise, { through: ExerciseCategory });

// Exercise User

// Exercise Date

// Exercise Workout Plan

module.exports = { Category, Date, Equipment, Exercise, Muscle, Rep, User, Weight, WorkoutPlan }