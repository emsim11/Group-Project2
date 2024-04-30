const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class WeightUnit extends Model {}

WeightUnit.init(
    {
        WeightUnit_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        WeightUnit_Name: {
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
        modelName: 'Weight_Units'
    }
);

module.exports = WeightUnit;