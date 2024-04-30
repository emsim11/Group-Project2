const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Exercise extends Model {}

Exercise.init(
    {
        Exercise_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Exercise_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Exercise_Description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Exercise_Image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Category_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Workout_Categories',
                key: 'Category_Name'
            }
        },
        Muscle_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Muscles',
                key: 'Muscle_Name'
            }
        },
        Equipment_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Equipment',
                key: 'Equipment_Name'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Exercises'
    }
);

Exercise.sync();

module.exports = Exercise;