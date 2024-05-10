const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Muscle_Group extends Model {}

Muscle_Group.init({
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
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'muscle_group',
});

module.exports = Muscle_Group;