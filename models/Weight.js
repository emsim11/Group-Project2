const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Weight = sequelize.define('Weight', {
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

Weight.associate = (models) => {
    Weight.belongsToMany(models.Weight, { through: 'ExerciseWeight' });
};

module.exports = Weight;