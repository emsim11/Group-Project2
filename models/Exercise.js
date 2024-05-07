const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model {}

Exercise.init({
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
    }, 
    category_name: {
        type: DataTypes.STRING,
        references: {
            model: 'category',
            key: 'name'
        }
    },
    equipment_name: {
        type: DataTypes.STRING,
        references: {
            model: 'equipment',
            key: 'name'
        }
    },
    muscle_name: {
        type: DataTypes.STRING,
        references: {
            model: 'muscle',
            key: 'name'
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise'
});

module.exports = Exercise;