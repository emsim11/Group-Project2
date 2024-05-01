const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Equipment = sequelize.define('Equipment', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
});

Equipment.associate = (models) => {
    Equipment.belongsToMany(models.Exercise, { through: 'ExerciseEquipment' });
};

module.exports = Equipment;