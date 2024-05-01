const sequelize = require('./config/connection');
const { Category, Date, Equipment, Exercise, Muscle, Rep, User, Weight } = require('./models');

sequelize.sync({ force: false }).then(() => {
    console.log('Database synchronized successfully');
}).catch((error) => {
    console.error('Error synchronizing database:', error);
});