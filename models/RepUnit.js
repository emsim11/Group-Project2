const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class RepUnit extends Model {}

RepUnit.init(
    {
        RepUnit_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        RepUnit_Name: {
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
        modelName: 'Rep_Units'
    }
);

module.exports = RepUnit;