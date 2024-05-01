const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Exercise = sequelize.define('Exercise', {
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
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
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
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
});

Exercise.associate = (models) => {
    Exercise.belongsToMany(models.Equipment, { through: 'ExerciseEquipment' });
};

Exercise.associate = (models) => {
    Exercise.belongsToMany(models.Muscle, { through: 'ExerciseMuscle' });
};

Exercise.associate = (models) => {
    Exercise.belongsToMany(models.Rep, { through: 'ExerciseRep' });
};

Exercise.associate = (models) => {
    Exercise.belongsToMany(models.Weight, { through: 'ExerciseWeight' });
};

Exercise.associate = (models) => {
    Exercise.belongsToMany(models.Category, { through: 'ExerciseCategory' });
};

module.exports = Exercise;