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
            validate: {
                isSvgFilePath(value) {
                    if (typeof value !== 'string') {
                        throw new Error('File path must be a string');
                    }
                    if (!/\.(svg)$/.test(value)) {
                        throw new Error('File path must have a .svg extension');
                    }
                }
            }
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

// TODO: Define belongsToMany Association to Establish Relationship to WorkoutPlan

Exercise.sync();

module.exports = Exercise;