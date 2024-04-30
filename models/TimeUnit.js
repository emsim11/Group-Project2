const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class TimeUnit extends Model {}

TimeUnit.init(
    {
        TimeUnit_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        TimeUnit_Name: {
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
        modelName: 'Time_Units'
    }
);

module.exports = TimeUnit;