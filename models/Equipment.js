const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Equipment extends Model {}

Equipment.init(
    {
        Equipment_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Equipment_Name: {
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
        modelName: 'Equipment'
    }
);

module.exports = Equipment;