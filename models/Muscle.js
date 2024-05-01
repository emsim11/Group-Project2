const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Muscle = sequelize.define('Muscle', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name_alt: {
        type: DataTypes.STRING,
        allowNull: true
    },
    is_front: {
        type: DataTypes.BOOLEAN,
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

Muscle.associate = (models) => {
    Muscle.belongsToMany(models.Exercise, { through: 'ExerciseMuscle' });
};

module.exports = Muscle;