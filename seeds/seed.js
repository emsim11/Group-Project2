const sequelize = require('../config/connection');
const { Equipment, Exercise, Muscle, RepUnit, User, WeightUnit, WorkoutCategory } = require('../models');

const categoryData = require('./categoryData.json');
const equipmentData = require('./equipmentData.json');
const exerciseData = require('./exerciseData.json');
const muscleData = require('./muscleData.json');
const repData = require('./repData.json');
const userData = require('./userData.json');
const weightData = require('./weightData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    for (const equipment of equipmentData) {
        await Equipment.create({
            ...equipment,
            User_Id: users[Math.floor(Math.random() * users.length)].User_Id,
        });
    }
    
    for (const muscle of muscleData) {
        await Muscle.create({
            ...muscle,
            User_Id: users[Math.floor(Math.random() * users.length)].User_Id,
        });
    }
    process.exit(0);
};

seedDatabase();