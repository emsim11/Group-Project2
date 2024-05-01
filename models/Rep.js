const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Rep = sequelize.define('Rep', {
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
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
});

Rep.associate = (models) => {
    Rep.belongsToMany(models.Exercise, { through: 'ExerciseRep' });
};

module.exports = Rep;