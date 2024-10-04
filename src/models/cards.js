const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Card = sequelize.define('Cards', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    cardname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    attack: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    defense: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = Card;