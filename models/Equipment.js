const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Equipment extends Model {}

Equipment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        validate: {
            isImgFilePath(value) {
                if (typeof value !== 'string') {
                    throw new Error('File path must be a string');
                }
                if (!/\.(svg)$/.test(value) || !/\.(png)$/.test(value) || !/\.(jpg)$/.test(value)) {
                    throw new Error('File path must have a .svg, .png, or .jpg extension');
                }
            }
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'equipment',
});

module.exports = Equipment;