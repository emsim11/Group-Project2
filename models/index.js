const Date = require('./Date');
const Equipment = require('./Equipment');
const Exercise = require('./Exercise');
const Muscle = require('./Muscle');
const RepUnit = require('./RepUnit');
const User = require('./User');
const WeightUnit = require('./WeightUnit');
const WorkoutCategory = require('./WorkoutCategory');
const WorkoutPlan = require('./WorkoutPlan');

// TODO: Figure Out How and What to Use 'hasMany' For
User.hasMany(WorkoutPlan , {
    foreignKey: 'User_Id',
    onDelete: 'CASCADE'
});

Muscle.hasMany(Exercise, {
    foreignKey: 'User_Id',
    onDelete: 'CASCADE'
});

module.exports = { Date, Equipment, Exercise, Muscle, RepUnit, TimeUnit, WeightUnit, WorkoutCategory, WorkoutPlan }