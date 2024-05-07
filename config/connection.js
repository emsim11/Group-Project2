require('dotenv').config();

const Sequelize = require('sequelize');

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );
};

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully');
  } catch (error) {
    console.error(error);
  }
};

connectToDatabase();

module.exports = sequelize;