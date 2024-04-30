const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Muscle extends Model {}

Muscle.init(
    {
        Muscle_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Muscle_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Muscle_Name_Alt: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Muscle_Is_Front: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Muscle_Image: {
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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Muscles'
    }
);

module.exports = Muscle;