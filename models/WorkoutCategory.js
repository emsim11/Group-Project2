const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class WorkoutCategory extends Model {}

WorkoutCategory.init(
    {
        Category_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Category_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Workout_Categories'
    }
);

module.exports = WorkoutCategory;