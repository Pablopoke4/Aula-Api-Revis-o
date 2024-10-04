const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deck = sequelize.define('Decks', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        autoIncrement: true
    },

    idUser: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Deckname: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    Description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Deck;