const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
});

Category.associate = (models) => {
    Category.belongsToMany(models.Exercise, { through: 'ExerciseCategory' });
};

module.exports = Category;