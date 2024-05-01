const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Date extends Model {}

Date.init(
    {
        Date_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Date_Name: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Date'
    }
);

module.exports = Date;