const Date = require('./Date');
const Equipment = require('./Equipment');
const Exercise = require('./Exercise');
const Muscle = require('./Muscle');
const RepUnit = require('./RepUnit');
const TimeUnit = require('./TimeUnit');
const User = require('./User');
const WeightUnit = require('./WeightUnit');
const WorkoutCategory = require('./WorkoutCategory');
const WorkoutPlan = require('./WorkoutPlan');
// commented below out to avoid error
// const APIModels = require({ Date, Equipment, Exercise, Muscle, RepUnit, TimeUnit, WeightUnit, WorkoutCategory, WorkoutPlan });

User.hasMany(WorkoutPlan , {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Muscle.hasMany(Exercise, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})


module.exports = { Date, Equipment, Exercise, Muscle, RepUnit, TimeUnit, WeightUnit, WorkoutCategory, WorkoutPlan }