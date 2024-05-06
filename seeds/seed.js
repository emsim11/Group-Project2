const sequelize = require('../config/connection');
const { Category, Date, Equipment, Exercise, Muscle, Rep, User, Weight, WorkoutPlan } = require('../models');

const categoryData = require('./categoryData.json');
const dateData = require('./dateData.json');
const equipmentData = require('./equipmentData.json');
const exerciseData = require('./exerciseData.json');
const muscleData = require('./muscleData.json');
const repData = require('./repData.json');
const userData = require('./userData.json');
const weightData = require('./weightData.json');
const workoutData = require('./workoutData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    for (const category of categoryData) {
        await Category.create({
            ...category,
            User_Id: users[Math.floor(Math.random() * users.length)].User_Id,
        });
    }

    for (const date of dateData) {
        await Date.create({
            ...date,
            User_Id: users[Math.floor(Math.random() * users.length)].User_Id,
        });
    }

    for (const equipment of equipmentData) {
        await Equipment.create({
            ...equipment,
            User_Id: users[Math.floor(Math.random() * users.length)].User_Id,
        });
    }

    for (const exercise of exerciseData) {
        await Exercise.create({
            ...exercise,
            User_Id: users[Math.floor(Math.random() * users.length)].User_Id,
        });
    }
    
    for (const muscle of muscleData) {
        await Muscle.create({
            ...muscle,
            User_Id: users[Math.floor(Math.random() * users.length)].User_Id,
        });
    }

    for (const rep of repData) {
        await Rep.create({
            ...rep,
            User_Id: users[Math.floor(Math.random() * users.length)].User_Id,
        });
    }

    for (const weight of weightData) {
        await Weight.create({
            ...weight,
            User_Id: users[Math.floor(Math.random() * users.length)].User_Id,
        });
    }

    for (const workoutPlan of workoutData) {
        await WorkoutPlan.create({
            ...workoutPlan,
            User_Id: users[Math.floor(Math.random() * users.length)].User_Id,
        });

    }
    
    process.exit(0);
};

seedDatabase();